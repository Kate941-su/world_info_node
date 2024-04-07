import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/route";
import { CronJob } from "cron";
import "dotenv/config";
import { fetchCountryAttribute } from "./service/countryAPI";
import { CountryAttributesModel } from "./model/country_attributes";
import mongoose, { ConnectOptions } from "mongoose";
import { ObjectId } from "bson";

const MONGODB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/world_info?authSource=admin`;

mongoose.connect(MONGODB_URL);

const dummyDataCN = new CountryAttributesModel({
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
});

const dummyDataUS = new CountryAttributesModel({
  id: 1,
  countryCode: "US",
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
});

const app = express();

const job = new CronJob(
  "* * * * * *",
  async () => {
    console.log("Cron Job Working");
    try {
      const result = await dummyDataUS.save();
      console.log("create succeeded");
    } catch (e) {
      console.log(e);
    }

    // try {
    //   const response = await fetchCountryAttribute("US");
    //   console.log(response.data);
    // } catch (e) {
    //   console.log(e);
    // }
  },
  null,
  false,
  "America/Los_Angeles"
);

async function main() {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.use(express.json());

  app.use("/api", router);

  app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
      status: "fail",
      message: `Route: ${req.originalUrl} not found`,
    });
  });

  const PORT = 8000;
  app.listen(PORT, () => {
    console.info(`Server started on port: ${PORT}`);
  });

  job.start();
}

main();
