type ResponseType = {
    code: number
    data: Object
}

type ErrorResponse = {
    errorCode: number
    errorMessage: string
    errors: Array<subErrors>
}

type subErrors = {
    field: string,
    message: string
}

export {
    ResponseType,
    ErrorResponse
}