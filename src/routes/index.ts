import express, { Router, Request, Response } from "express";
import tasks from "./task";
import courses from "./courses";

const router = Router();

// middlewares
router.use(express.json());

// basic routes
router.get("/health", (req: Request, res: Response) => {
  res.status(200).send();
});
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// API routes
router.use("/tasks", tasks); // test
router.use("/v1/courses", courses);

export default router;
