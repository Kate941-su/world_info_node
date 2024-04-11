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
    const result: CountryAttributesType = await CountryAttributesModel.findOne({
      countryCode: countryCode,
    });
    console.log(`get(): ${result}`);
    return result;
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
