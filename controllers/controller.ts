import { Request, Response, NextFunction } from "express";

const HealthCheck = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "Your Sever is Working",
  });
};

export default {
  HealthCheck,
};
