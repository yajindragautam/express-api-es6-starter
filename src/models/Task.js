import bs from "@config/bookshelf.js"

const tableName = "tasks"
const Task = bs.model(
  "Task",
  {
    // Instance properties and methods are defined here
    tableName: tableName,
  },
  {
    // Static class properties and methods
    getTableName: function () {
      return tableName
    },
  }
)

export default Task
