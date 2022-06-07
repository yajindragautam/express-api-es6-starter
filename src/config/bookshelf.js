const knexConfig = require("./knexfile.js")
import knex from "knex"
import bookshelf from "bookshelf"

const NODE_ENV = process.env.NODE_ENV
const dbConnection = knex(knexConfig[NODE_ENV])
const bs = bookshelf(dbConnection)

export default bs
