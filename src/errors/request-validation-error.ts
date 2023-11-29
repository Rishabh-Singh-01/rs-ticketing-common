import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

/**
 * Error thrown when request validation fails
 * statusCode: 400
 */
export class RequestValidationError extends CustomError {
  _statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super('Validation Failed for Request');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map((e) => {
      if (e.type === 'field')
        return {
          message: e.msg,
          field: e.path,
        };
      return {
        message: e.msg,
      };
    });
  }
}
