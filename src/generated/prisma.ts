import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    admins: <T = Admin[]>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessors: <T = Accessor[]>(args: { where?: AccessorWhereInput, orderBy?: AccessorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taskNodes: <T = TaskNode[]>(args: { where?: TaskNodeWhereInput, orderBy?: TaskNodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    admin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taskNode: <T = TaskNode | null>(args: { where: TaskNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    adminsConnection: <T = AdminConnection>(args: { where?: AdminWhereInput, orderBy?: AdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessorsConnection: <T = AccessorConnection>(args: { where?: AccessorWhereInput, orderBy?: AccessorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taskNodesConnection: <T = TaskNodeConnection>(args: { where?: TaskNodeWhereInput, orderBy?: TaskNodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createAdmin: <T = Admin>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAccessor: <T = Accessor>(args: { data: AccessorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTaskNode: <T = TaskNode>(args: { data: TaskNodeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTaskNode: <T = TaskNode | null>(args: { data: TaskNodeUpdateInput, where: TaskNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAdmin: <T = Admin | null>(args: { where: AdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTaskNode: <T = TaskNode | null>(args: { where: TaskNodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTaskNode: <T = TaskNode>(args: { where: TaskNodeWhereUniqueInput, create: TaskNodeCreateInput, update: TaskNodeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccessors: <T = BatchPayload>(args: { data: AccessorUpdateInput, where?: AccessorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTaskNodes: <T = BatchPayload>(args: { data: TaskNodeUpdateInput, where?: TaskNodeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAdmins: <T = BatchPayload>(args: { where?: AdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccessors: <T = BatchPayload>(args: { where?: AccessorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTaskNodes: <T = BatchPayload>(args: { where?: TaskNodeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    admin: <T = AdminSubscriptionPayload | null>(args: { where?: AdminSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    accessor: <T = AccessorSubscriptionPayload | null>(args: { where?: AccessorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    taskNode: <T = TaskNodeSubscriptionPayload | null>(args: { where?: TaskNodeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Admin: (where?: AdminWhereInput) => Promise<boolean>
  Accessor: (where?: AccessorWhereInput) => Promise<boolean>
  TaskNode: (where?: TaskNodeWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Accessor {
  user(where: UserWhereInput): User!
  permission: PermissionEnum!
}

"""A connection to a list of items."""
type AccessorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AccessorEdge]!
  aggregate: AggregateAccessor!
}

input AccessorCreateInput {
  permission: PermissionEnum!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type AccessorEdge {
  """The item at the end of the edge."""
  node: Accessor!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AccessorOrderByInput {
  permission_ASC
  permission_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AccessorPreviousValues {
  permission: PermissionEnum!
}

type AccessorSubscriptionPayload {
  mutation: MutationType!
  node: Accessor
  updatedFields: [String!]
  previousValues: AccessorPreviousValues
}

input AccessorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessorSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AccessorWhereInput
}

input AccessorUpdateInput {
  permission: PermissionEnum
  user: UserUpdateOneInput
}

input AccessorWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessorWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessorWhereInput!]
  permission: PermissionEnum

  """All values that are not equal to given value."""
  permission_not: PermissionEnum

  """All values that are contained in given list."""
  permission_in: [PermissionEnum!]

  """All values that are not contained in given list."""
  permission_not_in: [PermissionEnum!]
  user: UserWhereInput
}

type Admin implements Node {
  id: ID!
}

"""A connection to a list of items."""
type AdminConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

"""An edge in a connection."""
type AdminEdge {
  """The item at the end of the edge."""
  node: Admin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AdminPreviousValues {
  id: ID!
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
}

input AdminWhereInput {
  """Logical AND on all given filters."""
  AND: [AdminWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdminWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdminWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
}

input AdminWhereUniqueInput {
  id: ID
}

type AggregateAccessor {
  count: Int!
}

type AggregateAdmin {
  count: Int!
}

type AggregateTaskNode {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createAdmin: Admin!
  createAccessor(data: AccessorCreateInput!): Accessor!
  createTaskNode(data: TaskNodeCreateInput!): TaskNode!
  createUser(data: UserCreateInput!): User!
  updateTaskNode(data: TaskNodeUpdateInput!, where: TaskNodeWhereUniqueInput!): TaskNode
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteTaskNode(where: TaskNodeWhereUniqueInput!): TaskNode
  deleteUser(where: UserWhereUniqueInput!): User
  upsertTaskNode(where: TaskNodeWhereUniqueInput!, create: TaskNodeCreateInput!, update: TaskNodeUpdateInput!): TaskNode!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyAccessors(data: AccessorUpdateInput!, where: AccessorWhereInput): BatchPayload!
  updateManyTaskNodes(data: TaskNodeUpdateInput!, where: TaskNodeWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  deleteManyAccessors(where: AccessorWhereInput): BatchPayload!
  deleteManyTaskNodes(where: TaskNodeWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PermissionEnum {
  READ
  WRITE
  READWRITE
}

type Query {
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  accessors(where: AccessorWhereInput, orderBy: AccessorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Accessor]!
  taskNodes(where: TaskNodeWhereInput, orderBy: TaskNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaskNode]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  admin(where: AdminWhereUniqueInput!): Admin
  taskNode(where: TaskNodeWhereUniqueInput!): TaskNode
  user(where: UserWhereUniqueInput!): User
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  accessorsConnection(where: AccessorWhereInput, orderBy: AccessorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessorConnection!
  taskNodesConnection(where: TaskNodeWhereInput, orderBy: TaskNodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskNodeConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  ADMIN
  USER
  UNKNOWN
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  accessor(where: AccessorSubscriptionWhereInput): AccessorSubscriptionPayload
  taskNode(where: TaskNodeSubscriptionWhereInput): TaskNodeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TaskNode implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parentId: ID
  isComplete: Boolean!
  content: String!
  children: [ID!]!
  owner: ID!
}

"""A connection to a list of items."""
type TaskNodeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TaskNodeEdge]!
  aggregate: AggregateTaskNode!
}

input TaskNodeCreatechildrenInput {
  set: [ID!]
}

input TaskNodeCreateInput {
  parentId: ID
  isComplete: Boolean!
  content: String!
  owner: ID!
  children: TaskNodeCreatechildrenInput
}

"""An edge in a connection."""
type TaskNodeEdge {
  """The item at the end of the edge."""
  node: TaskNode!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TaskNodeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  parentId_ASC
  parentId_DESC
  isComplete_ASC
  isComplete_DESC
  content_ASC
  content_DESC
  owner_ASC
  owner_DESC
}

type TaskNodePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  parentId: ID
  isComplete: Boolean!
  content: String!
  children: [ID!]!
  owner: ID!
}

type TaskNodeSubscriptionPayload {
  mutation: MutationType!
  node: TaskNode
  updatedFields: [String!]
  previousValues: TaskNodePreviousValues
}

input TaskNodeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskNodeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskNodeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskNodeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TaskNodeWhereInput
}

input TaskNodeUpdatechildrenInput {
  set: [ID!]
}

input TaskNodeUpdateInput {
  parentId: ID
  isComplete: Boolean
  content: String
  owner: ID
  children: TaskNodeUpdatechildrenInput
}

input TaskNodeWhereInput {
  """Logical AND on all given filters."""
  AND: [TaskNodeWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaskNodeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaskNodeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  parentId: ID

  """All values that are not equal to given value."""
  parentId_not: ID

  """All values that are contained in given list."""
  parentId_in: [ID!]

  """All values that are not contained in given list."""
  parentId_not_in: [ID!]

  """All values less than the given value."""
  parentId_lt: ID

  """All values less than or equal the given value."""
  parentId_lte: ID

  """All values greater than the given value."""
  parentId_gt: ID

  """All values greater than or equal the given value."""
  parentId_gte: ID

  """All values containing the given string."""
  parentId_contains: ID

  """All values not containing the given string."""
  parentId_not_contains: ID

  """All values starting with the given string."""
  parentId_starts_with: ID

  """All values not starting with the given string."""
  parentId_not_starts_with: ID

  """All values ending with the given string."""
  parentId_ends_with: ID

  """All values not ending with the given string."""
  parentId_not_ends_with: ID
  isComplete: Boolean

  """All values that are not equal to given value."""
  isComplete_not: Boolean
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  owner: ID

  """All values that are not equal to given value."""
  owner_not: ID

  """All values that are contained in given list."""
  owner_in: [ID!]

  """All values that are not contained in given list."""
  owner_not_in: [ID!]

  """All values less than the given value."""
  owner_lt: ID

  """All values less than or equal the given value."""
  owner_lte: ID

  """All values greater than the given value."""
  owner_gt: ID

  """All values greater than or equal the given value."""
  owner_gte: ID

  """All values containing the given string."""
  owner_contains: ID

  """All values not containing the given string."""
  owner_not_contains: ID

  """All values starting with the given string."""
  owner_starts_with: ID

  """All values not starting with the given string."""
  owner_not_starts_with: ID

  """All values ending with the given string."""
  owner_ends_with: ID

  """All values not ending with the given string."""
  owner_not_ends_with: ID
}

input TaskNodeWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  role: Role
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  role: Role
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  role: Role
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Role =   'ADMIN' |
  'USER' |
  'UNKNOWN'

export type PermissionEnum =   'READ' |
  'WRITE' |
  'READWRITE'

export type AccessorOrderByInput =   'permission_ASC' |
  'permission_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type AdminOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TaskNodeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'parentId_ASC' |
  'parentId_DESC' |
  'isComplete_ASC' |
  'isComplete_DESC' |
  'content_ASC' |
  'content_DESC' |
  'owner_ASC' |
  'owner_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  role?: Role
}

export interface AccessorCreateInput {
  permission: PermissionEnum
  user: UserCreateOneInput
}

export interface TaskNodeWhereUniqueInput {
  id?: ID_Input
}

export interface AdminWhereInput {
  AND?: AdminWhereInput[] | AdminWhereInput
  OR?: AdminWhereInput[] | AdminWhereInput
  NOT?: AdminWhereInput[] | AdminWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
}

export interface AccessorUpdateInput {
  permission?: PermissionEnum
  user?: UserUpdateOneInput
}

export interface TaskNodeWhereInput {
  AND?: TaskNodeWhereInput[] | TaskNodeWhereInput
  OR?: TaskNodeWhereInput[] | TaskNodeWhereInput
  NOT?: TaskNodeWhereInput[] | TaskNodeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  parentId?: ID_Input
  parentId_not?: ID_Input
  parentId_in?: ID_Input[] | ID_Input
  parentId_not_in?: ID_Input[] | ID_Input
  parentId_lt?: ID_Input
  parentId_lte?: ID_Input
  parentId_gt?: ID_Input
  parentId_gte?: ID_Input
  parentId_contains?: ID_Input
  parentId_not_contains?: ID_Input
  parentId_starts_with?: ID_Input
  parentId_not_starts_with?: ID_Input
  parentId_ends_with?: ID_Input
  parentId_not_ends_with?: ID_Input
  isComplete?: Boolean
  isComplete_not?: Boolean
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  owner?: ID_Input
  owner_not?: ID_Input
  owner_in?: ID_Input[] | ID_Input
  owner_not_in?: ID_Input[] | ID_Input
  owner_lt?: ID_Input
  owner_lte?: ID_Input
  owner_gt?: ID_Input
  owner_gte?: ID_Input
  owner_contains?: ID_Input
  owner_not_contains?: ID_Input
  owner_starts_with?: ID_Input
  owner_not_starts_with?: ID_Input
  owner_ends_with?: ID_Input
  owner_not_ends_with?: ID_Input
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  role?: Role
}

export interface AccessorSubscriptionWhereInput {
  AND?: AccessorSubscriptionWhereInput[] | AccessorSubscriptionWhereInput
  OR?: AccessorSubscriptionWhereInput[] | AccessorSubscriptionWhereInput
  NOT?: AccessorSubscriptionWhereInput[] | AccessorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AccessorWhereInput
}

export interface TaskNodeUpdatechildrenInput {
  set?: ID_Input[] | ID_Input
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface TaskNodeUpdateInput {
  parentId?: ID_Input
  isComplete?: Boolean
  content?: String
  owner?: ID_Input
  children?: TaskNodeUpdatechildrenInput
}

export interface AdminWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  role?: Role
}

export interface TaskNodeCreateInput {
  parentId?: ID_Input
  isComplete: Boolean
  content: String
  owner: ID_Input
  children?: TaskNodeCreatechildrenInput
}

export interface TaskNodeCreatechildrenInput {
  set?: ID_Input[] | ID_Input
}

export interface AccessorWhereInput {
  AND?: AccessorWhereInput[] | AccessorWhereInput
  OR?: AccessorWhereInput[] | AccessorWhereInput
  NOT?: AccessorWhereInput[] | AccessorWhereInput
  permission?: PermissionEnum
  permission_not?: PermissionEnum
  permission_in?: PermissionEnum[] | PermissionEnum
  permission_not_in?: PermissionEnum[] | PermissionEnum
  user?: UserWhereInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface TaskNodeSubscriptionWhereInput {
  AND?: TaskNodeSubscriptionWhereInput[] | TaskNodeSubscriptionWhereInput
  OR?: TaskNodeSubscriptionWhereInput[] | TaskNodeSubscriptionWhereInput
  NOT?: TaskNodeSubscriptionWhereInput[] | TaskNodeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TaskNodeWhereInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface AdminSubscriptionWhereInput {
  AND?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  OR?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  NOT?: AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AdminWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface TaskNodeEdge {
  node: TaskNode
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
  role?: Role
}

export interface AggregateTaskNode {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface TaskNodeSubscriptionPayload {
  mutation: MutationType
  node?: TaskNode
  updatedFields?: String[]
  previousValues?: TaskNodePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TaskNodeConnection {
  pageInfo: PageInfo
  edges: TaskNodeEdge[]
  aggregate: AggregateTaskNode
}

/*
 * An edge in a connection.

 */
export interface AccessorEdge {
  node: Accessor
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  role?: Role
}

export interface AggregateAdmin {
  count: Int
}

export interface Accessor {
  user: User
  permission: PermissionEnum
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AdminSubscriptionPayload {
  mutation: MutationType
  node?: Admin
  updatedFields?: String[]
  previousValues?: AdminPreviousValues
}

export interface TaskNode extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  parentId?: ID_Output
  isComplete: Boolean
  content: String
  children: ID_Output[]
  owner: ID_Output
}

export interface AdminPreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface TaskNodePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  parentId?: ID_Output
  isComplete: Boolean
  content: String
  children: ID_Output[]
  owner: ID_Output
}

export interface AccessorPreviousValues {
  permission: PermissionEnum
}

export interface AccessorSubscriptionPayload {
  mutation: MutationType
  node?: Accessor
  updatedFields?: String[]
  previousValues?: AccessorPreviousValues
}

export interface Admin extends Node {
  id: ID_Output
}

export interface AggregateAccessor {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AdminConnection {
  pageInfo: PageInfo
  edges: AdminEdge[]
  aggregate: AggregateAdmin
}

/*
 * An edge in a connection.

 */
export interface AdminEdge {
  node: Admin
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface AccessorConnection {
  pageInfo: PageInfo
  edges: AccessorEdge[]
  aggregate: AggregateAccessor
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string