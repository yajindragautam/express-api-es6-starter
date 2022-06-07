

class BaseService {
  constructor(model) {
    this.model = model
    this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)

    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }
  // Register User
  async register(data){
    try {
      let newObj = await this.model.forge(data).save()
      return newObj
    } catch (err) {
      if(err.code === 'ER_DUP_ENTRY'){
        // console.log(err);
        throw new Error("User already exit with this email..!")
      }
      throw new Error(err.message)
    }
  }
  // Login 
  async login(data){
    try {
      let newObj = await this.model.find(data)
      console.log('newObj')
      return newObj
    } catch (err) {
      throw new Error(err.message)
    }
  }


  // Create
  async create(data) {
    try {
      let newObj = await this.model.forge(data).save()
      return newObj
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findAll() {
    try {
      let objects = await this.model.fetchAll()
      return objects
    } catch (err) {
      throw new Error(err.message)
    }
  }

  async findById(id) {
    try {
      const queryObj = await this.model.where({ id }).fetch({ require: true })
      return queryObj
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }

  async updateById(id, data) {
    try {
      const obj = await this.model.where({ id }).fetch({ require: true })
      const updatedObj = await obj.save(data)
      return updatedObj
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }

  async deleteById(id) {
    try {
      const obj = await this.model.where({ id }).fetch({ require: true })
      await obj.destroy()
      return "Deleted successfully"
    } catch (err) {
      if (err.message === "EmptyResponse") {
        throw new Error(
          `There are no ${this.model.getTableName()} for the given id`
        )
      }
      throw new Error(err.message)
    }
  }
}

export default BaseService
