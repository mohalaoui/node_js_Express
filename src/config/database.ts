import mongoose, { mongo } from "mongoose";
import * as env from "dotenv" 

env.config()

const uri = process.env.DB_CONNECTION as string;


export const connectBD  = () => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("mongodb connected successfuly...");
    })
    .catch((error) => {
        console.log({error});
    })
    
}
