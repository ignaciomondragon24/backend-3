
import GenericRepository from "./GenericRepository.js";
import Users from '../dao/Users.dao.js';

export default class UserRepository extends GenericRepository {
    constructor() {
        super(new Users());
    }
    
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.getBy({_id:id})
    }
}