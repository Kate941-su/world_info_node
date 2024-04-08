import { Int32, ObjectId } from "bson";
import mongoose, { Schema } from "mongoose";
import { CountryCode } from "../constants/country_code";

type CountryAttributesType = {
  id: Number;
  countryCode: String;
  surfaceArea: Number;
  capital: String;
  currency: {
    code: String;
    name: String;
  };
  gdp: Number;
  tourists: Number;
  population: Number;
  urbanPopulation: Number;
  region: String;
  popGrowth: Number;
  internetUsers: Number;
  gdpGrowth: Number;
  urbanPopulationGrowth: Number;
  co2Emissions: Number;
  forestedArea: Number;
  gdpPerCapita: Number;
  employmentAgriculture: Number;
  exports: Number;
  infantMortality: Number;
  threatenedSpecies: Number;
  employmentIndustry: Number;
};

const currencySchema = new Schema({
  code: String,
  name: String,
});

const countryAttributesSchema = new Schema({
  id: Number,
  countryCode: String,
  surfaceArea: Number,
  capital: String,
  currency: currencySchema,
  gdp: Number,
  tourists: Number,
  population: Number,
  urbanPopulation: Number,
  region: String,
  popGrowth: Number,
  internetUsers: Number,
  gdpGrowth: Number,
  urbanPopulationGrowth: Number,
  co2Emissions: Number,
  forestedArea: Number,
  gdpPerCapita: Number,
  employmentAgriculture: Number,
  exports: Number,
  infantMortality: Number,
  threatenedSpecies: Number,
  employmentIndustry: Number,
});

const CountryAttributesModel = mongoose.model(
  "CountryAttributes",
  countryAttributesSchema
);

export {
  CountryAttributesType,
  CountryAttributesModel,
  countryAttributesSchema,
};
