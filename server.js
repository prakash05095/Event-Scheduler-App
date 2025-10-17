import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./routes/events.js";
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/event_sc
heduler", {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
app.use("/api/events", eventRoutes);
app.listen(5000, () => console.log("Server running on port 5000"));
