
import IUnitOfWork from '../../Application/Interfaces/Repositories/IUnitOfWork'
import { injectable, inject, container } from "tsyringe";
import IUsecae from '../../Application/Interfaces/Usecase/IUsecae'
import User from '../../Domain/Entities/User'
import Result from '../../Application/Wrapper/Result'
@injectable()
export default class UserUsecase implements IUsecae {

    IUnitOfWork: IUnitOfWork
    constructor(@inject("IUnitOfWork") IUnitOfWork: IUnitOfWork) {

        this.IUnitOfWork = IUnitOfWork;
    }
   
    async get(req, res) {
        let value = await this.IUnitOfWork.IuserRepositorys.GetAllPromise()
        res.status("200").send(new Result<Array<User>>(value));
    }


    async set(req: any, res: any) {
        let value = await this.IUnitOfWork.IuserRepositorys.AddPromise(req.body)
        res.status("200").send(new Result<Array<User>>(value));
    }
    async update(req: any, res: any) {
        let value = await this.IUnitOfWork.IuserRepositorys.AddPromise(req.body)
        res.status("200").send(new Result<Array<User>>(value));
    }
    
    async delete(req: any, res: any) {
        let message=await this.IUnitOfWork.IlocalResources.getMessage("en","key")
        throw new Error(message);
        
    }

}