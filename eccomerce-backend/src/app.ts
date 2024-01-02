import express from "express";
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
const port =4000;

connectDb()
export const myCache = new NodeCache()
const app = express();

app.use(express.json())

// importing Routes
import userRoutes from "./routes/user.js"
import productRoute from "./routes/products.js"
// Routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product",productRoute)


app.get("/",(req,res,next)=>{
    res.send("hello")
})
app.use("/uploads",express.static("uploads"))
app.use(errorMiddleware);
app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})