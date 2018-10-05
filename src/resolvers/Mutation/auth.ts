import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../Objects'
import { InvalidOperationError } from '../../Exceptions';

export default {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password, roles: {set: ["USER"]} },
    })
    // ctx.request.headers.authToken = jwt.sign({ userId: user.id }, process.env.APP_SECRET); 
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
      
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new InvalidOperationError(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
     
    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
}
