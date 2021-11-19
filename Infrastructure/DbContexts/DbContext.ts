import DbConstraint from '../../Application/Constraints/DbConstraint'
import User from '../../Domain/Entities/User'
import { Connection, createConnection } from "typeorm";
import IContext from '../../Application/Constraints/Contexts/IContext';

export default class DbContext implements IContext {

    Dbcont: Promise<Connection>;
    config: DbConstraint;
    constructor() {
        this.config = new DbConstraint();
        this.initTable();

    }


    initTable() {
        this.config.entities.push(User)
        this.Dbcont = createConnection(this.config);
    }


    async getConnection() {
        return this.Dbcont
    }


}

