import express, { response, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./Error/globalErrorHandler";
import Config from "./Config";
import router from "./Routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: [Config.frontEndUrl,Config.frontEndUrlDevelopment],credentials:true }));

app.get("/", (_, res: Response) => {
  res.send("Server is perfectly running on port:5000.");
});

app.use("/api/v1",router)

app.use(globalErrorHandler);

app.use((_, res: Response) => {
  res
    .status(404)
    .send({ success: false, statusCode: 404, message: "Not Found" });
});

export default app;
