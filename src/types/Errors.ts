type invalidAttibutes = {
    field: string
    message: string
}

type mongooseError = {
    errorMessage: string
    errors: Array<invalidAttibutes>
}

class BadRequestError extends Error {
    status: number
    errors: Array<invalidAttibutes>
    description: string
    constructor(message: string, errors: Array<invalidAttibutes>) {
        super(message)
        this.description = 'Erro de validação'
        this.status = 400
        this.errors = errors
    }
}

class Unathorize extends Error {
    status: number
    errors: invalidAttibutes
    description: string
    constructor(message: string, errors: invalidAttibutes) {
        super(message)
        this.status = 401
        this.description = 'Não autorizado'
        this.errors = errors
    }
}

class Forbidden extends Error {
    status: number
    errors: invalidAttibutes
    description: string
    constructor(message: string, errors: invalidAttibutes) {
        super(message)
        this.status = 403
        this.description = 'Não permitido'
        this.errors = errors
    }
}

class NotFound extends Error {
    status: number
    errors: invalidAttibutes
    description: string
    constructor(message: string, errors: invalidAttibutes) {
        super(message)
        this.status = 404
        this.description = 'Recurso não encontrado'
        this.errors = errors
    }
}

export {
    NotFound,
    BadRequestError,
    Unathorize,
    Forbidden,
    mongooseError
}
