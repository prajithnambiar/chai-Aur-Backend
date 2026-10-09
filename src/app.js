import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors({
    origin: process.env.CORS_ENV,
    credentials: true,
}));
app.use(express.json({limit: "16kb"}));
app.use(urlencoded({extended: true, limit: "16kb"}));
app.use(express.static('public'));
app.use(cookieParser());

export default app;