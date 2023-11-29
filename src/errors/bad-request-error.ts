import { CustomError } from './custom-error';

/**
 * Error thrown for a bad request
 * statusCode: 400
 */
export class BadRequestError extends CustomError {
  _statusCode = 400;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
