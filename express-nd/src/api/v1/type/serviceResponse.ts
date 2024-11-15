import { IServiceError } from '#api/type/serviceError';

export interface ISuccessResponse<T> {
  data: T | null;
}

export interface IErrorResponse {
  error: IServiceError;
}

export type ServiceResponseType<T> = Promise<ISuccessResponse<T> | IErrorResponse>;
