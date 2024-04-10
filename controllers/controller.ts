import { Request, Response, NextFunction } from "express";
import { CountryAttributesType } from "../model/country_attributes";
import CountryInformationQuery from "../query_types/country_information_query";

const dummyCountry: CountryAttributesType = {
  id: 999,
  countryCode: "DUMMY",
  surfaceArea: 10000,
  capital: "Capital Dum",
  currency: { name: "dummy", code: "dummy" },
  gdp: 10000,
  tourists: 10000,
  population: 10000,
  urbanPopulation: 10000,
  region: "dummy",
  popGrowth: 10000,
  internetUsers: 10000,
  gdpGrowth: 0,
  urbanPopulationGrowth: 0,
  co2Emissions: 0,
  forestedArea: 0,
  gdpPerCapita: 0,
  employmentAgriculture: 0,
  exports: 0,
  infantMortality: 0,
  threatenedSpecies: 0,
  employmentIndustry: 10000,
};

const HealthCheck = async (req: Request, res: Response, next: NextFunction) => {
  console.log(`Get request (healthcheck)=> ${req}`);
  res.status(200).json({
    status: "success",
    message: "Your Sever is Working",
  });
};


const CountryInfomation = async (req: Request, res: Response) => {
  const query: CountryInformationQuery = req.query;
  console.log(`Get request (country info)=> ${req.query.countryCode}`);
  res.status(200).json(dummyCountry);
};

export { CountryInfomation, HealthCheck };
