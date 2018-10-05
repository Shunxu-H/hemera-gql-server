import { Context } from '../../Objects'
import { InvalidOperationError, NotAuthorizedError } from '../../Exceptions';

export default {
    async createTaskNode(parent, { parentId, content, children}, ctx: Context, info) {
        ctx.throwOnUnauthenticatedOrUnauthorized('USER'); 
        return ctx.db.mutation.createTaskNode(
            {
                data: {
                    parentId,
                    content,
                    isComplete: false, 
                    children, 
                    owner: ctx.user.id
                },
            },
            info
        )
    },

    async deleteTaskNode(parent, { taskNodeId }, ctx: Context, info) {
        ctx.throwOnUnauthenticatedOrUnauthorized('USER'); 

        const nodeExists = await ctx.db.exists.TaskNode({
            id: taskNodeId
        })
        if (!nodeExists) {
            ctx.response.status(404).json({
                error: true, 
                message: 'Node not found'
            })
            throw new InvalidOperationError(`Node not found`)
        }
        const taskNode = await ctx.db.query.taskNode({where: {id: taskNodeId}}, info)
        if(taskNode.owner !== ctx.user.id ){
            throw new NotAuthorizedError('You are not the owner of the task')
        }
        
        return ctx.db.mutation.deleteTaskNode({ where: { id : taskNodeId} }, info)
    },
}
