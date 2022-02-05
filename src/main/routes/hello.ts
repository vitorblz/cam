import { Router } from "express";
import { HelloController } from "../../adapters/presentation/controllers/hello-controller";
import { routeExpressAdapter } from "../adapters/route-express-adapter";


export default function index(route: Router): void{
   // functional approach
   // route.get('/',routeExpressAdapter(new HelloController()));
   route.get('/',new routeExpressAdapter(new HelloController()).perform);
}