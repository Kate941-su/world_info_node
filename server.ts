import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/route";
import { CronJob } from "cron";

const app = express();

const job = new CronJob(
  "* * * * * *",
  () => console.log("Hello Wolrd"),
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
