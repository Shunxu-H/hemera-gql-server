import { Context } from '../../Objects'
import { NotAuthorizedError } from '../../Exceptions';

export default {
    async me(parent, args, ctx: Context, info) {
        if (!ctx.isAuthenticated()){
            throw new NotAuthorizedError()
        }
        return ctx.user; 
    },
    async userById(parent, {id}, ctx: Context, info){
        if(!ctx.user.is("ADMIN")){
            throw new NotAuthorizedError()
        }
        return await ctx.db.query.user({where: {id}}, info)
    }, 
    async userByEmail(parent, {email}, ctx: Context, info){
        if(!ctx.user.is("ADMIN")){
            throw new NotAuthorizedError()
        }
        return await ctx.db.query.users({where: {email}}, info)
    }, 
    async users(parent, args, ctx: Context, info){
        if(!ctx.user.is("ADMIN")){
            throw new NotAuthorizedError()
        }
        return ctx.db.query.users({}, info)
    }, 
}
