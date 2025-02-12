import Project from '../model/projectsModel.js';
import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "projects", // Cloudinary folder name
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Create a new project with an image upload
export const createProject = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Missing required file - image" });
    }

    // Extract text fields
    const { name, description, link, language } = req.body;

    // Get image URL from Cloudinary
    const image = req.file.path;

    // Create a new project instance
    const newProject = new Project({ name, description, image, link, language });

    // Save to MongoDB
    await newProject.save();

    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// Export Multer Middleware
export { upload };