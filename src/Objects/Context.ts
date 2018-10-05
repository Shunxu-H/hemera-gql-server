import { User } from './User'
import { Prisma, Role } from '../generated/prisma'
import { ContextParameters } from 'graphql-yoga/dist/types';
import { Response, Request } from 'express'
import { ExecutionParams } from 'subscriptions-transport-ws';
import { NotAuthorizedError, NotAuthenticatedError } from '../Exceptions';

export interface IContext {
    db: Prisma
    request: any
    user: User | null
}

export class Context implements IContext, ContextParameters{
    db: Prisma
    user: User | null
    request: Request
    response: Response
    connection: ExecutionParams
    constructor(contextParam: ContextParameters , db: Prisma, user: User | null){
        this.db = db
        this.user = user
        this.request = contextParam.request
        this.response = contextParam.response
        this.connection = contextParam.connection
    }

    public isAuthenticated = ():boolean => this.user !== null

    public throwOnUnauthenticatedOrUnauthorized(role: Role){
        if(!this.isAuthenticated()){
            throw new NotAuthenticatedError()
        }
        if(!this.user.is(role)){
            throw new NotAuthorizedError()
        }
    }

}
  