class ApiError extends Error {
  constructor(
    statusCode,
    message = "Internal server error",
    error = [],
    stack = ""
  ) {
    super(message); //super(message); call invokes the constructor of the parent class (Error). This is necessary to properly initialize the Error object with the provided message.
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
