import GenericRepository from './GenericRepository'
import  User from "../../Domain/Entities/User";
import { Connection, EntityTarget } from 'typeorm';
import IContext from '../../Application/Constraints/Contexts/IContext';
import {injectable, inject} from "tsyringe";

@injectable()

export default class UserRepository extends GenericRepository<User>{

    constructor(@inject("IContext")   conetxt: IContext) { 
        super(conetxt,User); 
     }
     

}