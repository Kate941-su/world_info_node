import StrageRepository from "./strage_repository";
import { CountryCode } from "../constants/country_code";
import {
  CountryAttributesModel,
  CountryAttributesType,
} from "../model/country_attributes";

class StrageRepositoryImpl implements StrageRepository {
  public async getAll(): Promise<Array<CountryAttributesType>> {
    return [];
  }
  public async get(countryCode: CountryCode): Promise<CountryAttributesType> {
    const result = await CountryAttributesModel.findOne({ countryCode: "US" });
    console.log("=======");
    console.log(result);
    console.log("=======");
    const a: CountryAttributesType = {
      id: 99,
      countryCode: "CN",
      surfaceArea: 0,
      capital: "dummy",
      currency: { name: "dummy", code: "dummy" },
      gdp: 0,
      tourists: 0,
      population: 0,
      urbanPopulation: 0,
      region: "dummy",
      popGrowth: 0,
      internetUsers: 0,
      gdpGrowth: 0,
      urbanPopulationGrowth: 0,
      co2Emissions: 0,
      forestedArea: 0,
      gdpPerCapita: 0,
      employmentAgriculture: 0,
      exports: 0,
      infantMortality: 0,
      threatenedSpecies: 0,
      employmentIndustry: 0,
    };

    return a;
  }
  public async save(countryAttributes: CountryAttributesType) {}
}

export default StrageRepositoryImpl;
