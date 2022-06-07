import bs from "@config/bookshelf.js"

const tableName = "tokens"
const Token = bs.model(
  "Token",
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

export default Token
