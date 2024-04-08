import { AxiosResponse } from "axios";
import { CountryAttributesModel } from "../model/country_attributes";

interface ApiNinjaRepository {
  getAttribute(countryCode: String): Promise<AxiosResponse>;
}

export default ApiNinjaRepository;
