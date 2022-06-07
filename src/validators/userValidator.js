import Joi from '@hapi/joi'

const userValidator = Joi.object({
    firstName: Joi.string().max(30).min(3).empty().message({
        'string.max':'Username must be between 3 to 30 character',
        'string.min':'Username must be 3 character long',
        'string.empty':"User can't be empty",
        'any.required':'Username is required',
    }),
    lastName: Joi.string().max(30).min(3).empty().message({
        'string.max':'Lastname must be between 3 to 30 character',
        'string.min':'Lastname must be 3 character long',
        'string.empty':"Lastname can't be empty",
        'any.required':'Lastname is required',
    }),
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
    conformPassword: Joi.string().min(6).max(20).empty().message({
        'string.min':'Conform Password must be min of 6 character long..!',
        'string.max':'Conform Password max character is 20',
        'string.empty':"Conform Password can't be empty",
       'any.required':'Conform Password is requires..!' 
    }),
})

// Export User Validator
export default userValidator;