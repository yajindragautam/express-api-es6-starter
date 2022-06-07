import Joi from "@hapi/joi"

const updateTaskValidator = Joi.object({
  title: Joi.string().max(30).messages({
    "string.empty": "Title cannot be empty",
    "string.max": "Title cannot exceed 30 characters",
  }),
  description: Joi.string().max(100).messages({
    "string.max": "Description cannot exceed 100 characters",
  }),
})

export default updateTaskValidator
