import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import resolvers from './resolvers'
import * as jwt from 'jsonwebtoken'
import { AuthDirective } from './directive';
import { User } from './Objects';
import { Context } from './Objects';




const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    // schemaDirectives: {
    //     auth: AuthDirective,
    //     authorized: AuthDirective,
    //     authenticated: AuthDirective
    // }, 
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }, 
    context: async (args) => {
        // configure database
        const db = new Prisma({
            endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
            debug: true, // log all GraphQL queries & mutations sent to the Prisma API
            secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
        })

        // extract user info
        const Authorization = args.request.get('Authorization')
        let user = null; 
        if (Authorization) {
            const token = Authorization.replace('Bearer ', '')
            const {userId} = jwt.verify(token, process.env.APP_SECRET) as {userId: string}
            user = new User( await db.query.user({where: {id: userId}}) )
        }

        return new Context(
            args,
            db, 
            user, 
        )
    },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))