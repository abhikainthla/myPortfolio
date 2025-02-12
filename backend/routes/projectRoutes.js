import express from "express";
import { createProject, getProjects, upload } from "../controller/projectsController.js";

const router = express.Router();

router.post("/createproject", upload.single("image"), createProject)
router.get("/getProject", getProjects);

export default router;
