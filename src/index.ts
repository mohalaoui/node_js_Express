import express from "express";
import bodyParser from "body-parser";
import booksRoutes from "./routes/books"
import morgan from "morgan"
import * as database from './config/database'
 
const app = express();
// databese
database.connectBD();

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use("/books", booksRoutes);


//server up
app.listen(8085, () => {
  console.log("server started at port: 8085");
});
