import { HTTP_RESPONSE_CODE } from '#src/const/global.js';

class ServiceError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }

  static notFound(message = 'Resource not found') {
    return { error: new ServiceError(HTTP_RESPONSE_CODE.NOT_FOUND, message) };
  }

  static badRequest(message = 'Bad request') {
    return { error: new ServiceError(HTTP_RESPONSE_CODE.BAD_REQUEST, message) };
  }

  static unauthorized(message = 'Unauthorized access') {
    return { error: new ServiceError(HTTP_RESPONSE_CODE.UNAUTHORIZED, message) };
  }

  static forbidden(message = 'Access forbidden') {
    return { error: new ServiceError(HTTP_RESPONSE_CODE.FORBIDDEN, message) };
  }

  static internalError(message = 'Internal server error') {
    return { error: new ServiceError(HTTP_RESPONSE_CODE.INTERNAL_SERVER_ERROR, message) };
  }
}

export default ServiceError;
