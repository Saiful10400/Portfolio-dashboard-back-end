import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { Request, Response } from "express";
import allApiService from "./service";
import httpStatus from "http-status";

// personal info getting.
const getPersonalInfo = catchAsync(async (req: Request, res: Response) => {
  const data = await allApiService.getPersonalInfo()

  sendResponse(res, {
    data,
    statusCode: httpStatus.OK,
    message: "Profile data fetched.",
    success: true,
  });
});
// update personal info.
const updatePersonalInfo = catchAsync(async (req: Request, res: Response) => {
  const data = allApiService.updatePersonalInfo(req.body);

  sendResponse(res, {
    data,
    statusCode: httpStatus.OK,
    message: "Information updated.",
    success: true,
  });
});

// get blog.
const getBlog=catchAsync(async (req: Request, res: Response) => {
  const data = await allApiService.getBlogs(req);
 
  sendResponse(res, {
    data,
    statusCode: httpStatus.OK,
    message: "Blogs retrieved.",
    success: true,
  });
});
// update blog.
const createBlog=catchAsync(async (req: Request, res: Response) => {
  const data = allApiService.createBlogs(req.body);

  sendResponse(res, {
    data,
    statusCode: httpStatus.OK,
    message: "Blogs created.",
    success: true,
  });
});

const allController = {
  getPersonalInfo,
  updatePersonalInfo,
  getBlog,
  createBlog
};

export default allController;
