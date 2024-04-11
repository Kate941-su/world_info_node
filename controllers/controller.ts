import { Request, Response, NextFunction } from "express";
import { CountryAttributesType } from "../model/country_attributes";
import CountryInformationQuery from "../query_types/country_information_query";
import StrageRepositoryImpl from "../repository/strage_repository_impl";
import { CountryCode } from "../constants/country_code";

const strageRepository = new StrageRepositoryImpl();

const HealthCheck = async (req: Request, res: Response, next: NextFunction) => {
  console.log(`Get request (healthcheck)=> ${req}`);
  res.status(200).json({
    status: "success",
    message: "Your Sever is Working",
  });
};

// TODO: Type Safety
const CountryInfomation = async (req: Request, res: Response) => {
  const code = req.query.countryCode;
  console.log(`Get request (country info)=> ${req.query.countryCode}`);
  const codeKey: CountryCode = Object.keys(CountryCode).find(
    (key) => CountryCode[key] === code
  ) as CountryCode;
  const countryAttribute = await strageRepository.get(codeKey);
  console.log(countryAttribute);
  res.status(200).json(countryAttribute);
};

export { CountryInfomation, HealthCheck };
