import BaseService from "./baseService"
import User from "../models/User"

class UserService extends BaseService {
  constructor(model) {
    super(model)
  }
}

// exporting

export default new UserService(User)
