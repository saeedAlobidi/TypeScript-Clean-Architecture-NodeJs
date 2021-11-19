import { PrimaryGeneratedColumn } from "typeorm";
import SuperEntity  from '../Entities/SuperEntity'

export class  Identifier<T>extends SuperEntity{
    @PrimaryGeneratedColumn()
    id: number; 
}