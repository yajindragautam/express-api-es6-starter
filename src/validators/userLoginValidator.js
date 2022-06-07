import Joi from '@hapi/joi'

const userLoginValidator = Joi.object({
    email: Joi.string().email().empty().message({
        'string.email':'Invalid email format..!',
        'string.empty':"Email can't be empty",
        'any.required':'Email is required..!' 
    }),
    password:Joi.string().min(6).max(20).empty().message({
        'string.min':'Password must be min of 6 character long..!',
        'string.max':'Password max character is 20',
        'string.empty':"Password can't be empty",
       'any.required':'Password is requires..!' 
    }),
})

// Export User Login Validator
export default userLoginValidator;