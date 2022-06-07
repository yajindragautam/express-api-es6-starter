import taskValidator from "./taskValidators"
import updateTaskValidator from "./updateTaskValidator"
import userRegsterValidator from "./userRegisetValidator"
import userLoginValidator from "./userLoginValidator"
import userValidator from "./userValidator"

export default {
  task: taskValidator,
  updateTask: updateTaskValidator,
  user:userValidator,
  userRegister: userRegsterValidator,
  userLogin:userLoginValidator
}
