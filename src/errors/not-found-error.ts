import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  _statusCode = 404;

  constructor() {
    super('Route Not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [
      {
        message: 'Please provide a valid route !!',
      },
    ];
  }
}
