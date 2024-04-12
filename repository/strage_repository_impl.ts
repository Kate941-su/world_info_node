import StrageRepository from "./strage_repository";
import { CountryCode } from "../constants/country_code";
import {
  CountryAttributesModel,
  CountryAttributesType,
} from "../model/country_attributes";
import { count } from "console";

class StrageRepositoryImpl implements StrageRepository {
  public async getAll(): Promise<Array<CountryAttributesType>> {
    const result: Array<CountryAttributesType> =
      await CountryAttributesModel.find();
    return result;
  }

  public async get(countryCode: CountryCode): Promise<CountryAttributesType> {
    const result = await CountryAttributesModel.findOne({
      countryCode: countryCode,
    });
    console.log(`get(): ${result}`);

    const attribute: CountryAttributesType = {
      id: result.id,
      countryCode: result.countryCode,
      surfaceArea: result.surfaceArea,
      capital: result.capital,
      currency: {
        code: result.currency.code,
        name: result.currency.name,
      },
      gdp: result.gdp,
      tourists: result.tourists,
      population: result.population,
      urbanPopulation: result.urbanPopulation,
      region: result.region,
      popGrowth: result.popGrowth,
      internetUsers: result.internetUsers,
      gdpGrowth: result.gdpGrowth,
      urbanPopulationGrowth: result.urbanPopulationGrowth,
      co2Emissions: result.co2Emissions,
      forestedArea: result.forestedArea,
      gdpPerCapita: result.gdpPerCapita,
      employmentAgriculture: result.employmentAgriculture,
      exports: result.exports,
      infantMortality: result.infantMortality,
      threatenedSpecies: result.threatenedSpecies,
      employmentIndustry: result.employmentIndustry,
    };
    return attribute;
  }

  public async save(countryAttributes: CountryAttributesType) {
    console.log(countryAttributes);
    const model = new CountryAttributesModel(countryAttributes);
    try {
      const result = await model.save();
      console.log(`save succeed!! => ${result}`);
    } catch (e) {
      console.log(`strage repository save error => ${e}`);
    }
  }
}

export default StrageRepositoryImpl;
