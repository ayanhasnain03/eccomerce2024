import express from "express";
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import {config} from "dotenv"
import morgan from "morgan"
// importing Routes
import userRoutes from "./routes/user.js"
import productRoute from "./routes/products.js"
import orderRoute from "./routes/order.js"
config({
    path:"./.env"
})

const port =process.env.PORT || 4000;
const mongoURI=process.env.MONGO_URI || "";
connectDb(mongoURI)
export const myCache = new NodeCache()
const app = express();
app.use(express.json())
app.use(morgan("dev"))


// Routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product",productRoute)
app.use("/api/v1/order",orderRoute)


app.get("/",(req,res,next)=>{
    res.send("hello")
})
app.use("/uploads",express.static("uploads"))
app.use(errorMiddleware);
app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})