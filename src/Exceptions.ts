

export class NotAuthenticatedError extends Error{
    constructor(reason: string = 'Not Authenticated'){
        super(reason); 
    }
}

export class NotAuthorizedError extends Error {
    constructor(reason: string='Not authorized') {
        super(reason)
    }
}

export class InvalidOperationError extends Error{
    constructor(reason: string='Invalid Operation'){
        super(reason)
    }
}
  