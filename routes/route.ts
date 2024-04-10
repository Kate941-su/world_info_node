import express from "express";
import { HealthCheck, CountryInfomation } from "../controllers/controller";

const router = express.Router();

router.get("/healthcheck", HealthCheck);
router.get("/countryinformation", CountryInfomation);

export default router;
