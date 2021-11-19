  import { Connection } from 'typeorm';
import DbConstraint from '../../Constraints/DbConstraint'
  export default interface IContext
    {
          Dbcont:Promise<Connection>;
          config:DbConstraint;
        
    }