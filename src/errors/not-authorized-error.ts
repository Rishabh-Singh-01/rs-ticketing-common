import { CustomError } from './custom-error';

/**
 * Error thrown when authorization fails
 * statusCode: 402
 */
export class NotAuthorizedError extends CustomError {
  _statusCode = 401;

  constructor() {
    super('Not Authorized !!');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeError(): { message: string; field?: string | undefined }[] {
    return [
      {
        message: 'Not Authorized !!',
      },
    ];
  }
}
