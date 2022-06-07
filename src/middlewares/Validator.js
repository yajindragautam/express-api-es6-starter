import validators from "../validators"

function Validator(validatorName) {
  // check if there is a validator for the given name or not
  if (!Object.prototype.hasOwnProperty.call(validators, validatorName)) {
    throw new Error(`${validatorName} validator does not exist`)
  }

  return async function (req, res, next) {
    const { error, value } = validators[validatorName].validate(req.body, {
      abortEarly: false,
    })
    if (error) {
      let msg = {}
      for (let err of error.details) {
        msg[err.path[0]] = err.message
      }
      return res.status(422).json({
        errors: msg,
      })
    }
    req.body = value
    next()
  }
}

export default Validator
