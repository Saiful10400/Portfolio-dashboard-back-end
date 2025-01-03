import { Router } from "express";
import allController from "./controller";

const router=Router()


// personal info's.
router.get("/personalInfo",allController.getPersonalInfo)
router.post("/personalInfoUpdate",allController.updatePersonalInfo)

//blog
router.get("/blog",allController.getBlog)
router.post("/createBlog",allController.createBlog)

//project
router.get("/project",allController.getProject)
router.post("/createProject",allController.createProject)



const allRoutes=router

export default allRoutes