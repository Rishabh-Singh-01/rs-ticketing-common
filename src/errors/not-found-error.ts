import { CustomError } from './custom-error';

/**
 * Error thrown when request is not found
 * statusCode: 404
 */
export class NotFoundError extends CustomError {
  _statusCode = 404;

  constructor() {
    super('Route Not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [
      {
        message: 'Not found !!',
      },
    ];
  }
}
