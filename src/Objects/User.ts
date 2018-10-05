import { User as IUser, Role as IRole } from '../generated/prisma'

export { IUser , IRole}

export class User implements IUser{
    id: string
    email: string
    password: string
    name: string
    role: IRole
  
    constructor(user: IUser){
      this.id = user.id
      this.email = user.email
      this.password = user.password
      this.name = user.name 
      this.role = user.role; 
    }
  
    public is(role: IRole){
      return this.role === role
    }
  
    public isAdmin(){
      return this.is('ADMIN')
    }
  }
  