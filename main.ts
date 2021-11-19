
import "reflect-metadata";
import Services from './API/Dependency/Services'
import StartUp from './API/EndPoint/StartUp'
 


async function Main() {

    // init dependency injection
    new Services();

    //StartUp
    new StartUp();
 
    

}

Main();







