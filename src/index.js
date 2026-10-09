import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "./constants.js";
import conectdb from "./db/index.js";

const app = express();

dotenv.config({
    path: './.env'
});

conectdb().then(()=> {
    app.on('error', (err)=>{
console.log('dm not connected');
throw err;

    })
    app.listen(process.env.PORT, ()=> {console.log(`server is running on port ${process.env.PORT}`)});
}).catch((err)=> {
    console.log('we got an error', err);
})












//through this method we are writing whole of the logic inside index.js file
// const app = express();

// (async ()=> {
//     try{
//         await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
//         app.on("error", (err)=>{
//             console.log('could not connect to the database');
//             throw err;
//         });
//         app.listen(process.env.PORT, ()=> {
//             console.log(`server is running on port ${process.env.PORT}`);
//         })

//     }
//     catch(err){
//         console.log(err);
//         throw err;
//     }

// })()