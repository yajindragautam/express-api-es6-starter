import BaseController from "@BaseController"
import tasksService from "@Services/tasksService"
class TasksController extends BaseController {
  constructor(service) {
    super(service)
  }

  // override "create" method from the baseController
  async create(req, res) {
    try {
      const { title, description } = req.body;
      if (!title) {
        return res.status(400).json({
          error: true,
          msg: "Title is required",
        })
      }
      const newObj = await this.service.create({
        title,
        description,
      })
      return res.status(200).json({
        error: false,
        data: newObj,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }

  // override "updateById" method from the baseController
  async updateById(req, res) {
    try {
      const id = req.params.id
      const { title, description } = req.body
      const data = { title, description }
      const updatedObj = await this.service.updateById(id, data)
      return res.status(200).json({
        error: false,
        data: updatedObj,
      })
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: err.message,
      })
    }
  }
}

export default new TasksController(tasksService)
