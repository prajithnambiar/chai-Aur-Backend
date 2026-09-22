import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js";

const conectdb = async ()=> {
    try{
      if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is missing in .env');
      }

      const connnectionInstance =  await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
      console.log('mongodb connected successfully', connnectionInstance.connection.host);

    }
    catch(err){
        console.log('bhai error aa gaya -->', err);
        process.exit(1);
    }
}

export default conectdb;