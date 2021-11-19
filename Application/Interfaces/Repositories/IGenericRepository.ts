export default interface IGenericRepository<T> {
    

    GetByIdPromise(id);

    GetAllPromise();

    AddPromise(entity:T);

    UpdatePromise(entity:T);

    DeletePromise(entity:T);
}

