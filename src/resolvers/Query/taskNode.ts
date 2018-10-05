import { Context } from '../../Objects'


export default {

    taskNodes(parent, args, ctx: Context, info){
        const where = {
            owner: ctx.user.id
        }

        return ctx.db.query.taskNodes({where}, info); 
    }, 

    taskNode(parent, { id }, ctx: Context, info){
        return ctx.db.query.taskNode({where: { id }}, info)
    }, 

}
