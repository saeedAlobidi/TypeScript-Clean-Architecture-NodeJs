
import "reflect-metadata";
import Services from './API/Dependency/Services'
import StartUp from './API/EndPoint/StartUp'
import LocalResources from './Domain/LocalResources/config'


async function Main() {

    //init LocalResources

    LocalResources()

    // init dependency injection
    new Services();

    //StartUp
    new StartUp();



}

Main();







