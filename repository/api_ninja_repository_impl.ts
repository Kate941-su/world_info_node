import axios, { AxiosResponse } from "axios";
import ApiNinjaRepository from "./api_ninja_repository";
import { CountryAttributesType } from "../model/country_attributes";

const endPoint = "https://api.api-ninjas.com/v1/country";

class ApiNinjaRepositoryImpl implements ApiNinjaRepository {
  public async getAttribute(
    countryCode: String
  ): Promise<CountryAttributesType> {
    const result: AxiosResponse<CountryAttributesType[]> = await axios.get(
      endPoint,
      {
        headers: {
          "X-Api-Key": process.env.API_NINJA_KEY,
        },
        params: {
          name: countryCode,
        },
      }
    );
    return result[0];
    // const attribute: CountryAttributesType = {
    //   id: result.data.id,
    //   countryCode: result.data[0].country_code,
    //   surfaceArea: result.data[0].surface_area,
    //   capital: result.data[0].capital,
    //   currency: {
    //     name: result.data[0].currency.name,
    //     code: result.data[0].currency.code,
    //   },
    //   gdp: result.data[0].gdp,
    //   tourists: result.data[0].tourists,
    //   population: result.data[0].population,
    //   urbanPopulation: result.data[0].urban_population,
    //   region: result.data[0].region,
    //   popGrowth: result.data[0].pop_growth,
    //   internetUsers: result.data[0].internet_users,
    //   gdpGrowth: result.data[0].gdp_growth,
    //   urbanPopulationGrowth: result.data[0].urban_population_growth,
    //   co2Emissions: result.data[0].co2_emissions,
    //   forestedArea: result.data[0].forested_area,
    //   gdpPerCapita: result.data[0].gdp_per_capita,
    //   employmentAgriculture: result.data[0].employment_agriculture,
    //   exports: result.data[0].exports,
    //   infantMortality: result.data[0].infant_mortality,
    //   threatenedSpecies: result.data[0].threatened_species,
    //   employmentIndustry: result.data[0].employment_industry,
    // };
  }
}

export default ApiNinjaRepositoryImpl;
