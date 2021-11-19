import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import  {Identifier} from "../Common/Identifier";
import  {Gender} from "../Enum/Gender";
 

@Entity()
export default  class User extends   Identifier<number> {
    
    @Column()
    name: string; 
    @Column()
    gender: Gender; 
    @Column()
    description: string;
    @Column()
    filename: string;
    @Column()
    views: number;
    @Column()
    isPublished: boolean;
}

