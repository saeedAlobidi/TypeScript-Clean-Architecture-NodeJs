
import express from 'express';
import {injectable, inject,container} from "tsyringe";
import AsyncMiddleHandler from '../Core/AsyncMiddleHandler'
import IUsecae  from '../../Infrastructure/Interface/IUsecae'
 export default class BaseController { 

    router;
    iusecae:IUsecae
    constructor(iusecae:IUsecae) {
      
     this.iusecae=iusecae;
     this.router=express.Router();
     this.initRouter();
     return this.router;
    }
 

    private initRouter(){ 
        
      this.router.get('/get',  AsyncMiddleHandler(async (req, res) => {
       const usecase = this.iusecae; 
         await usecase.get(req, res)
      
    
    }));
    }
    

}


