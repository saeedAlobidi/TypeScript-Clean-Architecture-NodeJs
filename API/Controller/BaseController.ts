
import express from 'express';
import { injectable, inject, container } from "tsyringe";
import AsyncMiddleHandler from '../Core/AsyncMiddleHandler'
import IUsecae from '../../Application/Interfaces/Usecase/IUsecae'
export default class BaseController {

  router;
  iusecae: IUsecae
  constructor(iusecae: IUsecae) {

    this.iusecae = iusecae;
    this.router = express.Router();
    this.initRouter();
    return this.router;
  }


  private initRouter() {

    this.router.get('/get', AsyncMiddleHandler(async (req, res) => {
      const usecase = this.iusecae;
      await usecase.get(req, res)

    }));

    this.router.get('/set', AsyncMiddleHandler(async (req, res) => {
      const usecase = this.iusecae;
      await usecase.set(req, res)

    }));


    this.router.get('/update', AsyncMiddleHandler(async (req, res) => {
      const usecase = this.iusecae;
      await usecase.update(req, res)

    }));

    this.router.get('/delete', AsyncMiddleHandler(async (req, res) => {
      const usecase = this.iusecae;
      await usecase.delete(req, res)

    }));

  }


}


