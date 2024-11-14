import { IServiceError } from '#api/type/serviceError';

// Type for successful responses
interface SuccessResponse<T> {
  data: T | null;
}

// Type for error responses
interface ErrorResponse {
  error: IServiceError;
}

export type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;
