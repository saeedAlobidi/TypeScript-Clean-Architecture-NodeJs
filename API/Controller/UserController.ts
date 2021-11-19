
import {injectable, inject,container} from "tsyringe";
import BaseController from './BaseController';
 import UserUsecase from '../../Infrastructure/Usecase/UserUsecase'

 
export default class UserController extends BaseController { 

    constructor() {
       super(container.resolve(UserUsecase))
    }
}