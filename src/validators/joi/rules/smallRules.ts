import * as Joi from "joi";

export const smallRules = Joi.object({
    id: Joi
        .string()
        .uuid(),
    name: Joi
        .string()
        .min(2)
        .max(32),
    surname: Joi
        .string()
        .min(3)
        .max(32),
    height: Joi
        .number()
        .integer()
        .min(175)
        .max(200),
    weight: Joi
        .number()
        .integer()
        .min(65)
        .max(120),
    birth_date: Joi
        .date(),
    email: Joi
        .string()
        .email(),
    phone_number: Joi
        .string()
        .pattern(new RegExp('^[0-9]{9}')),
    password: Joi
        .string()
        .min(6)
        .max(64),
    repeated_password: Joi
        .ref('password')
});