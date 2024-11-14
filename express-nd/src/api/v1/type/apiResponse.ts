import { Request, Response, NextFunction } from 'express';
import { IServiceError } from '#api/type/serviceError';

export interface IApiResponse extends Response {
  success: (data: any) => void;
  created: (data: any) => void;
  deleted: () => void;
  serviceError: (serviceError: IServiceError) => void;
  error: (message: string, options?: { statusCode?: number; details?: any }) => void;
}

export type ApiResponseType = (req: Request, res: IApiResponse, next: NextFunction) => Promise<void>;
