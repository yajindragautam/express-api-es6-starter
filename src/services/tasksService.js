import BaseService from "@BaseService"
import Task from "@Models/Task"

class TasksService extends BaseService {
  constructor(model) {
    super(model)
  }
}

export default new TasksService(Task)
