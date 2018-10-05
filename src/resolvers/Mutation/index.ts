import auth from './auth'
import user from './user'
import taskNode from './TaskNode'

export default {
    ...auth, 
    ...user, 
    ...taskNode
}