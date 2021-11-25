import { Connection, EntityTarget, Repository, SelectQueryBuilder } from 'typeorm';
import  IGenericRepository  from '../../Application/Interfaces/Repositories/IGenericRepository'
import IContext from '../../Application/Constraints/Contexts/IContext';




import {injectable, inject} from "tsyringe";

@injectable()

export default class GenericRepository<T>  implements IGenericRepository<T> {

    private repository: Repository<T>;
    private Dbcont:Promise<Connection>;
    private conetxt: IContext;
    private repo: EntityTarget<T>
    private  query:SelectQueryBuilder<T>;
    constructor(@inject("IContext")   conetxt: IContext, repo: EntityTarget<T>) {
       
        this.Dbcont = conetxt.Dbcont; 
        this.conetxt = conetxt;
        this.repo = repo;
     }
    
     async GetQueryBuilder(queryBuilderAlias:string) {
        let connection=await this.Dbcont
        this.query= await connection.getRepository<T>(this.repo).createQueryBuilder(queryBuilderAlias);
          return this.query;
    }
    async BuildQueryBuild(queryBuilderAlias:string) {
        let connection=await this.Dbcont
        this.query= await connection.getRepository<T>(this.repo).createQueryBuilder(queryBuilderAlias);
          return this;
    }
    
    async Pagination(index:number=0,size:number=1){
        
        return  await this.query.skip(index).take(size).execute()
                
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