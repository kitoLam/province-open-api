import { Router } from "express";
import provinceRouter from './province.route';
const router = Router();
router.use('/provinces', provinceRouter);
export default router;