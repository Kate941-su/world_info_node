import { Schema } from "mongoose";
import { CountryCode } from "../constants/country_code";
import { CountryAttributesType } from "../model/country_attributes";

interface StrageRepository {
  getAll(): Promise<Array<CountryAttributesType>>;
  get(countryCode: CountryCode): Promise<CountryAttributesType>;
  save(countryAttributes: CountryAttributesType);
}

export default StrageRepository;
