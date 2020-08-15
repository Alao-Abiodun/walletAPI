class customError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name,
            this.status = status || 400
    }
}

export default customError;