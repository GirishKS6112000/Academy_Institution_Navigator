import express from "express";
import path from 'path';
import {con} from "./database/connect.js";
import "./database/modelschema.js";
// import { createdoc } from "./database/modelschema.js";
import  route  from "./router/collegeroutes.js";
const app = express();
const port = process.env.PORT || '3000';

con();
// createdoc();
app.get("/recieved" , (req , res)=>{
    res.send("Data Recieved")
})


app.use(route);
app.use('/static' , express.static(path.join(process.cwd() , "public")));
app.set('views' , './views');
app.set("view engine" , "ejs");



app.listen(port , ()=>{console.log(`Server running at http://localhost:${port}`)});