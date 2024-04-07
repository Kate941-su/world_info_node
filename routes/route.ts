import express from "express";
import controller from "../controllers/controller";

const router = express.Router();

router.get("/healthcheck", controller.HealthCheck);

export default router;
