import  Result from '../../Application/Wrapper/Result'

export default function errorHandler (err:any, req:any, res:any, next:any) {
    

    res.status("500").send(new Result<any>( null,err.message,"500"))
  }

 