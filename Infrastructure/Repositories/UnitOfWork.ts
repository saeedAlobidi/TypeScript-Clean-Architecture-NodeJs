import IUnitOfWork from '../../Application/Interfaces/Repositories/IUnitOfWork'
import IuserRepository from '../../Application/Interfaces/Repositories/IuserRepository'
import {injectable, inject} from "tsyringe";

@injectable()
export default class UnitOfWork implements IUnitOfWork {

    IuserRepositorys: IuserRepository

    constructor(@inject("IuserRepository")   IuserRepositorys: IuserRepository) {
        this.IuserRepositorys = IuserRepositorys;
    }
 
}