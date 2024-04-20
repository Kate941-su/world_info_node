import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/route";
import { CronJob } from "cron";
import "dotenv/config";
import { fetchCountryAttribute } from "./service/countryAPI";
import { CountryAttributesType } from "./model/country_attributes";
import mongoose, { ConnectOptions } from "mongoose";
import { ObjectId } from "bson";
import ApiNinjaRepository from "./repository/api_ninja_repository";
import ApiNinjaRepositoryImpl from "./repository/api_ninja_repository_impl";
import StrageRepository from "./repository/strage_repository";
import StrageRepositoryImpl from "./repository/strage_repository_impl";
import saveToMongoDBCron from "./cron/save_to_mongo_cron";
import { CountryCode } from "./constants/country_code";
import { resolve } from "path";

const MONGODB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/world_info?authSource=admin`;

const mongooseInit = async () => {
  try {
    const _ = await mongoose.connect(MONGODB_URL);
  } catch (e) {
    console.log(e);
  }
};

mongooseInit();
const app = express();
const apiNinjaRepository: ApiNinjaRepository = new ApiNinjaRepositoryImpl();
const strageRepository: StrageRepository = new StrageRepositoryImpl();

const job = new CronJob(
  "30 * * * * *",
  async () => {
    // await Promise.all(
    //   Object.values(CountryCode).map((it) => {
    //     try {
    //       saveToMongoDBCron(it);
    //     } catch (_) {
    //       console.log(`${it} doesn't exist in the API ninja. Check is needed.`);
    //     }
    //   })
    // );
    // for (const code of Object.values(CountryCode)) {
    //   await saveToMongoDBCron(code);
    // }
    // console.log("===== Finish!! =====");
  },
  null,
  false,
  "America/Los_Angeles"
);

const immediate = async () => {
  for (const code of Object.values(CountryCode)) {
    await saveToMongoDBCron(code);
  }
  console.log("===== Finish!! =====");
};

immediate();

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
