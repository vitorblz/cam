import { Router } from "express";
import { HelloController } from "../../adapters/presentation/controllers/hello-controller";
import { routeExpressAdapter } from "../adapters/route-express-adapter";


export default function index(route: Router): void{
   
    route.get('/',routeExpressAdapter(new HelloController()));

}