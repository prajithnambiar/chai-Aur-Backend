class ApiError extends Error {
    constructor(statusCode, messge="something went wrong",
        errors = [],
        stack = ""
    ) {
        super(messge);
        this.statusCode = statusCode;
        this.errors = errors;
        this.data = data;
        this.message = messge;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
}
}

export {ApiError};