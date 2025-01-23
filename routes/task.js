const express = require("express");
const { getAllTasks, createTask } = require("../controllers/taskController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticate, getAllTasks);
router.post("/", authenticate, createTask);

module.exports = router;
