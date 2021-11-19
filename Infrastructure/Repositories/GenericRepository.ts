import { Connection, EntityTarget, Repository } from 'typeorm';
import  IGenericRepository  from '../../Application/Interfaces/Repositories/IGenericRepository'
import IContext from '../../Application/Constraints/Contexts/IContext';




import {injectable, inject} from "tsyringe";

@injectable()

export default class GenericRepository<T>  implements IGenericRepository<T> {

    private repository: Repository<T>;
    private Dbcont:Promise<Connection>;
    private conetxt: IContext;
    private repo: EntityTarget<T>
    constructor(@inject("IContext")   conetxt: IContext, repo: EntityTarget<T>) {
       
        this.Dbcont = conetxt.Dbcont;
        this.conetxt = conetxt;
        this.repo = repo;
     }
     
    async GetByIdPromise(id: any) {
        let connection=await this.Dbcont
        return  connection.getRepository<T>(this.repo).findByIds([id]);
    }
    async GetAllPromise() {
        
        let connection=await this.Dbcont
        return  connection.getRepository<T>(this.repo).find();
        
    }
    async AddPromise(entity: T) {
        let connection=await this.Dbcont
        return  connection.getRepository<T>(this.repo).save(entity);

       
    }
    async UpdatePromise(entity: T) {
        let connection=await this.Dbcont
        return  connection.getRepository<T>(this.repo).save(entity);
    }

    async DeletePromise(entity: T) {
        let connection=await this.Dbcont
        return  connection.getRepository<T>(this.repo).delete(entity);
    }

}