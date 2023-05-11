import { Router } from "express";


const coursePackageRouter = Router();

coursePackageRouter.get("/", getPackageByCourse);
  
coursePackageRouter.post("/",newPackage);

coursePackageRouter.delete("/:package_id", deletePackage);

export { coursePackageRouter };