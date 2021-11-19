
export default class Result<T>{
     Messages:String;
     Status:String;
     data:T;
      constructor( data:T,Messages:String="",Status:String="200"){
              this.data=data;
              this.Messages=Messages;
              this.Status=Status 

      }
}

