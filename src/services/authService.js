import BaseService from "./baseService"
import User from "../models/User"

class AutService extends BaseService{
    constructor(model){
        super(model)
    }


}

// Export Auth Services
export default new AutService(User);