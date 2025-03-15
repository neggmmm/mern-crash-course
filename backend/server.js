import express from 'express';
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js"

const app = express();
const PORT = process.env.PORT || PORT
app.use(express.json()) // middleware that allows us to accept JSON data in the req.body


app.use("/api/products",productRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log("SErver started at http://localhost:"+ PORT)
})

