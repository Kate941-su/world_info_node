import axios, { AxiosResponse } from "axios";
import ApiNinjaRepository from "./api_ninja_repository";

const endPoint = "https://api.api-ninjas.com/v1/country";

class ApiNinjaRepositoryImpl implements ApiNinjaRepository {
  public async getAttribute(countryCode: String): Promise<AxiosResponse> {
    const result = await axios.get(endPoint, {
      headers: {
        "X-Api-Key": process.env.API_NINJA_KEY,
      },
      params: {
        name: countryCode,
      },
    });
    console.log(result.status);
    return result;
  }
}

export default ApiNinjaRepositoryImpl;
