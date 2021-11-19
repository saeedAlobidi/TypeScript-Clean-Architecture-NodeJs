import { injectable } from "tsyringe";
import { container } from "tsyringe";
import DbContext from '../../Infrastructure/DbContexts/DbContext'
import UserRepository from '../../Infrastructure/Repositories/UserRepository'
import UnitOfWork from '../../Infrastructure/Repositories/UnitOfWork'
import UserController from "../Controller/UserController";
export default class Services {

    constructor() {
        this.initUseCaseDepedency();
        this.initControllerDepedency();
    }

    initUseCaseDepedency() {

        container.register("IContext", {
            useClass: DbContext
        });
        container.register("IuserRepository", {
            useClass: UserRepository
        });

        container.register("IUnitOfWork", {
            useClass: UnitOfWork
        });

        
    }

    initControllerDepedency() {

        container.register("UserControllser", {
            useClass: UserController
        });
       

        
    }
}