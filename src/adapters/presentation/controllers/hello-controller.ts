import { ok } from "../../../main/http-helper";
import { Controller } from "../../../main/ports/controller";
import { HttpRequest, HttpResponse } from "../../../main/ports/http";

export class HelloController implements Controller{
    async handler(req: HttpRequest): Promise<HttpResponse> {
        const body = {message: 'Hello'};
        return ok(body);
    }
}