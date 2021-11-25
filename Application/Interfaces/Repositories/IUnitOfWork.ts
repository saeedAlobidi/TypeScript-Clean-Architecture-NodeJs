import   IGenericRepository from './IGenericRepository'
import   IuserRepository  from './IuserRepository'
import   IlocalResources  from '../LocalResources/IlocalResources'
export default interface IUnitOfWork{  
    IuserRepositorys:IuserRepository  
    IlocalResources:IlocalResources
}