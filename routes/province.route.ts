import { Router } from "express";
import * as provinceController from '../controllers/province.controller';
const router = Router();
router.get('/', provinceController.getProvinceList);
router.get('/:provinceCodename/districts', provinceController.getDistrictList);
router.get('/:provinceCodename/districts/:districtCodename/wards', provinceController.getWardList);
export default router;