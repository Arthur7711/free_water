import express from "express";
import connectDB from "./config/db";
import locationRoutes from "./routes/location"

const app = express();
connectDB();

app.use(express.json());
app.use("/location", locationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));