import IGenericRepository from './IGenericRepository'
import User from '@/Domain/Entities/User'
 
export default  interface UserRepository extends  IGenericRepository<User>{
  

}