

import {injectable, inject,container} from "tsyringe";
import UserController from '../Controller/UserController' 
 
export default class PipeLine {
   
    constructor(app) {
        this.initPipline(app)
    }

    async initPipline(app) {
     
        app.use("/api/User", container.resolve("UserControllser"))
    }

    
 
}