const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

dotenv.confit();

const app = express();

app.use(cors());
app.use(express.json());


// mongoose
// .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log("Database Connected"))
// .catch((err) => console.log("Database connection error:", err));
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));

let port = process.env.PORT || 5000;

app.listen(port,()=>{

    console.log("Server is running on port", port);
})