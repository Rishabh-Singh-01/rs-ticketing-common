export abstract class CustomError extends Error {
  protected abstract _statusCode: number;

  constructor(errorMessageForLog: string) {
    super(errorMessageForLog);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  get statusCode() {
    return this._statusCode;
  }

  abstract serializeError(): {
    message: string;
    field?: string;
  }[];
}
