import { Router, Request, Response } from "express";

const router = Router();
router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.get("/:id/chapters/:chapterId", getChapter);
router.get("/:id/chapters/:chapterId/units/:unitId", getUnit);

async function getAllCourses(req: Request, res: Response) {
  res.json({
    courses: [],
  });
}
async function getCourse(req: Request, res: Response) {
  res.json({});
}
async function getChapter(req: Request, res: Response) {
  res.json({});
}
async function getUnit(req: Request, res: Response) {
  res.json({});
}

export default router;

// - Get all courses
//   - Endpoint: `GET /v1/courses`
// - Get a course details
//   - Endpoint: `GET /v1/courses/:id`
// - Get a chapter details
//   - Endpoint: `GET /v1/courses/:id/chapters/:id`
// - Get a unit details
//   - Endpoint: `GET /v1/courses/:id/chapters/:id/units/:id`
