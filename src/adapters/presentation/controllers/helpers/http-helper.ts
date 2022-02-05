import { ServerError } from "../../../../main/errors"
import { HttpResponse } from "../../../../main/ports/http"

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (data: any): HttpResponse => ({
  statusCode: 204,
  body: data
})

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(reason)
})
