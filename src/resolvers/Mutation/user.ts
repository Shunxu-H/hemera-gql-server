import { Context } from '../../Objects'
import { NotAuthorizedError } from '../../Exceptions';

export default {
    async deleteUser(parent, {email}, ctx: Context, info) {
        ctx.throwOnUnauthenticatedOrUnauthorized('ADMIN'); 
        return ctx.db.mutation.deleteUser({where: {email}}, info)
    }, 

    async updateUserRole(parent, {email, newRole}, ctx: Context, info){
        ctx.throwOnUnauthenticatedOrUnauthorized('ADMIN'); 
        return ctx.db.mutation.updateUser( {data:{role: newRole}, where: {email}}, info)
    }

}
