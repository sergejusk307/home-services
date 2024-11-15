import { IErrorResponse, ISuccessResponse } from '#api/type/serviceResponse';

export function isSuccessResponse<T>(response: IErrorResponse | ISuccessResponse<T>): response is ISuccessResponse<T> {
  return 'data' in response;
}

export function isErrorResponse<T>(result: IErrorResponse | ISuccessResponse<T>): result is IErrorResponse {
  return 'error' in result;
}
