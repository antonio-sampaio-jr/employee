import express from "express";
import * as dotenv from "dotenv";
import employeeRouter from "./routes/employee.routes.js" 

dotenv.config();

const app = express();
app.use(express.json());

app.use("/employee",employeeRouter);

app.listen(Number(process.env.PORT),()=>{
    console.log("Server on port 8080!");
});