import Joi from "@hapi/joi"

const taskValidator = Joi.object({
  title: Joi.string().max(30).required().messages({
    "any.required": `Title field is required`,
    "string.empty": "Title cannot be empty",
    "string.max": "Title cannot exceed 30 characters",
  }),
  description: Joi.string().max(100).messages({
    "any.required": `Description field is required`,
    "string.max": "Description cannot exceed 100 characters",
  }),
})

export default taskValidator
