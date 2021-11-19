import { BaseEntity } from "typeorm";

 export default class  DbConstraint{

    type:any= "mssql";
    host:any= "192.168.1.100"; 
    username: any="mms";
    password:any= "mms";
    database:any= "test22"; 
    entities:any= [];
    synchronize:any= true; 
    logging:any= false;
    extra:any={   "trustServerCertificate": true};

    constructor(){
        
    }

      
         
    
}

