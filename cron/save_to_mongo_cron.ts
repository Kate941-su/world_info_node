import {
  CountryAttributesModel,
  CountryAttributesType,
} from "../model/country_attributes";
import { CountryCode } from "../constants/country_code";
import ApiNinjaRepository from "../repository/api_ninja_repository";
import StrageRepository from "../repository/strage_repository";
import ApiNinjaRepositoryImpl from "../repository/api_ninja_repository_impl";
import StrageRepositoryImpl from "../repository/strage_repository_impl";

const apiNinjaRepository: ApiNinjaRepository = new ApiNinjaRepositoryImpl();
const strageRepository: StrageRepository = new StrageRepositoryImpl();

const saveToMongoDBCron = async (countryCode: CountryCode) => {
  try {
    const response: CountryAttributesType =
      await apiNinjaRepository.getAttribute(countryCode);
    await strageRepository.save({ countryCode: countryCode, ...response });
  } catch (e) {
    console.log(`save to mongo db cron error => ${countryCode}`);
  }
};

export default saveToMongoDBCron;
