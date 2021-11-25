import IUnitOfWork from '../../Application/Interfaces/Repositories/IUnitOfWork'
import IuserRepository from '../../Application/Interfaces/Repositories/IuserRepository'
import {injectable, inject} from "tsyringe";
import IlocalResources from '../../Application/Interfaces/LocalResources/IlocalResources';

@injectable()
export default class UnitOfWork implements IUnitOfWork {

    IuserRepositorys: IuserRepository;
    IlocalResources: IlocalResources;
    constructor(@inject("IuserRepository")   IuserRepositorys: IuserRepository,
                @inject("IlocalResources")   IlocalResources: IlocalResources) {
        this.IuserRepositorys = IuserRepositorys;
        this.IlocalResources=IlocalResources;
    }
    
 
}