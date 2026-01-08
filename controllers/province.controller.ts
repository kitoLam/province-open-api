import { Request, Response } from "express";
import Province from "../models/province.model";

export const getProvinceList = async (req: Request, res: Response) => {
  const provinceList = await Province.find().lean();
  const dataFinal: any[] = [];
  provinceList.forEach((item) => {
    item.division_type;
    dataFinal.push({
      name: item.name,
      codename: item.codename,
      division_type: item.division_type,
      districtCount: item.districts.length,
    });
  });
  return res.json({
    success: true,
    data: {
      provinceList: dataFinal,
    },
  });
};
export const getDistrictList = async (req: Request, res: Response) => {
  const provinceCodename = req.params.provinceCodename;
  const foundProvince = await Province.findOne({
    codename: provinceCodename,
  }).lean();
  if (!foundProvince) {
    return res.status(404).json({
      success: false,
      message: "Not found Province",
    });
  }
  const dataFinal: any[] = [];
  foundProvince.districts.forEach((item) => {
    dataFinal.push({
      name: item.name,
      codename: item.codename,
      division_type: item.division_type,
      wardCount: item.wards.length,
    });
  });
  res.json({
    success: true,
    data: {
      districtList: dataFinal,
    },
  });
};
export const getWardList = async (req: Request, res: Response) => {
  const provinceCodename = req.params.provinceCodename;
  const districtCodename = req.params.districtCodename;
  const foundProvince = await Province.findOne({
    codename: provinceCodename,
  }).lean();
  if (!foundProvince) {
    return res.status(404).json({
      success: false,
      message: "Not found Province",
    });
  }
  const foundDistrict = foundProvince.districts.find((item) => {
    return item.codename == districtCodename;
  });
  if (!foundDistrict) {
    return res.status(404).json({
      success: false,
      message: "Not found District",
    });
  }
  const dataFinal: any[] = [];
  foundDistrict.wards.forEach((item) => {
    dataFinal.push({
      name: item.name,
      codename: item.codename,
      division_type: item.division_type,
    });
  });
  res.json({
    success: true,
    data: {
      wardList: dataFinal,
    },
  });
};
