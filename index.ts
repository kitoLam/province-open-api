import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import router from './routes/index'
import { connectDb } from './configs/database';
const app = express();
const PORT = Number(process.env.PORT);
connectDb();
app.use(router);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Route not found!"
  })
})
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(">>> [ERROR]: ", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  })
})
app.listen(PORT, () => {
  console.log(`App chạy trên port ${PORT}`)
});