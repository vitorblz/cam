import { Request, Response } from "express";
import { Controller } from "../ports/controller";
import { HttpResponse } from "../ports/http";

// export function routeExpressAdapter(controller: Controller){
//     return  async (req: Request, res: Response) =>{
//        const httpResponse: HttpResponse = await  controller.handler(req);
//        res.status(httpResponse.statusCode).json(httpResponse.body);
//     }
// }

export class routeExpressAdapter{
    constructor(private readonly controller: Controller){}
    async perform(req: Request, res: Response){
        const httpResponse: HttpResponse = await  this.controller.handler(req);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}