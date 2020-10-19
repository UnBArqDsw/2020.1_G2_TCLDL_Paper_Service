import { BadRequestError } from '@presentation/errors/BadRequestError';
import { NotFoundRequestError } from '@presentation/errors/NotFoundRequestError';
import { ServerError } from '@presentation/errors/ServerError';
import { ValidationRequestError } from '@presentation/errors/ValidationRequestError';
import { HttpResponse } from '@presentation/protocols/Http';

export const successRequest = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const successCreate = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const successRemove = (): HttpResponse => ({
  statusCode: 204,
});

export const badRequest = (message: string): HttpResponse => {
  const badRequestError = new BadRequestError(message);

  return {
    statusCode: badRequestError.statusCode,
    body: badRequestError.message,
  };
};

export const notFound = (message: string): HttpResponse => {
  const notFoundRequestError = new NotFoundRequestError(message);

  return {
    statusCode: notFoundRequestError.statusCode,
    body: notFoundRequestError.message,
  };
};

export const validationError = (message: string): HttpResponse => {
  const validationRequestError = new ValidationRequestError(message);

  return {
    statusCode: validationRequestError.statusCode,
    body: validationRequestError.message,
  };
};

export const serverError = (): HttpResponse => {
  const httpServerError = new ServerError();

  return {
    statusCode: httpServerError.statusCode,
    body: httpServerError.message,
  };
};
