const Joi = require("joi");

module.exports = {
    // Auth
    signup: {
        body: Joi.object({
            email: Joi.string()
                .trim(true)
                .required()
                .email({ tlds: { allow: false } }),
            password: Joi.string().trim(true).required().min(5).max(30),
            username: Joi.string().trim(true).required().min(3).max(20),
        }),
    },

    login: {
        body: Joi.object({
            email: Joi.string()
                .trim(true)
                .email({ tlds: { allow: false } })
                .required(),
            password: Joi.string().trim(true).required().min(5).max(30),
        }),
    },

    // User,
    modifyUser: {
        body: Joi.object({
            currentPassword: Joi.string().trim(true).required().min(5).max(30),
            username: Joi.string().trim(true).optional().min(3).max(20),
            password: Joi.string().trim(true).optional().min(5).max(30),
        }),
    },

    // Todo
    addTodo: {
        body: Joi.object({
            name: Joi.string().trim(true).required().min(1).max(4096),
            done: Joi.boolean().default(false),
        }),
    },

    modifyTodo: {
        body: Joi.object({
            name: Joi.string().trim(true).optional().min(1).max(4096),
            done: Joi.boolean().optional(),
        }),
    },
};
