import express from "express";
import userRoutes from "./routes/user.js";
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const port = 4000;
connectDb();
const app = express();
app.use(express.json());
// importing Routes
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res, next) => {
    res.send("hello");
});
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);
});
