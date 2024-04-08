import { AxiosResponse } from "axios";
import {
  CountryAttributesType,
  CountryAttributesModel,
} from "../model/country_attributes";

interface ApiNinjaRepository {
  getAttribute(countryCode: String): Promise<CountryAttributesType>;
}

export default ApiNinjaRepository;
