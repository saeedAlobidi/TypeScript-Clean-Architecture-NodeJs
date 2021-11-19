import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import PipeLine from '../EndPoint/PipeLine'

export default class StartUp {
    app;
    port;
    constructor() {
       
    }

    async initEndPoint() {
        this.app = express(); 
        this.app.use(cors({
            preflightContinue: true,
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            "Access-Control-Allow-Origin": "*",
            "exposedHeaders": ['Content-Length', 'X-U-T', 'X-P-T', 'Access-Control-Allow-Credentials'],

        }));
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({   extended: true}))
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        new PipeLine(this.app)
        this.port = 5000;
        this.app.listen(this.port, () => {
            console.log(`Timezones by location application is running on port ${this.port}.`);
        });

        return this.app

    }

    
}