

import {injectable, inject,container} from "tsyringe";
import ExceptionHandler from '../Core/ExceptionHandler' 

export default class PipeLine {
   
    constructor(app) {
        this.initPipline(app)
    }

    async initPipline(app) {
     
        app.use("/api/User", container.resolve("UserControllser"))
        app.use(ExceptionHandler);
    }

    
 
}