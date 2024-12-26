import { Router } from "express";
import authenticationRoutes from "../Modules/authentication/routes";
import allRoutes from "../Modules/allApis/routes";

const router=Router()

const moduleRoutes=[
   
    {
        path:"/auth",
        route:authenticationRoutes
    },
    {
        path:"/all",
        route:allRoutes
    },
   
]

moduleRoutes.forEach(item=>router.use(item.path,item.route))


export default router