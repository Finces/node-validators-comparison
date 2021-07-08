import * as Joi from "joi";

const contactValidation = Joi.object({
    phone_number: Joi
        .string()
        .allow(null)
        .pattern(/[0-9]{9}/),
    email: Joi
        .string()
        .allow(null)
        .email()
});

const personValidation = Joi.object({
    id: Joi
        .string()
        .uuid(),
    first_name: Joi
        .string()
        .min(1)
        .max(32),
    last_name: Joi
        .string()
        .min(3)
        .max(64),
    contact: contactValidation,
});

const addressValidation = Joi.object({
    country: Joi
        .string()
        .valid('Poland'),
    city: Joi
        .string()
        .valid('Rzeszów', 'Warszawa', 'Wrocław', 'Stalowa Wola'),
    postal_code: Joi
        .string()
        .regex(/[0-9]{2}-[0-9]{3}/),
    street: Joi
        .string()
        .min(3)
        .max(64),
    building: Joi
        .string()
        .min(1)
        .max(32)
});

const orderDetailsValidation = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(64),
    description: Joi
        .string()
        .min(8)
        .max(2048),
    price: Joi
        .number()
        .greater(0),
    currency: Joi
        .string()
        .valid('PLN', 'EUR', 'DOL'),
    delivery_address: addressValidation,
});

const priceValidation = Joi.object({
    amount: Joi
        .number()
        .greater(0),
    currency: Joi
        .string()
        .valid('PLN', 'EUR', 'DOL'),
});

const productValidation = Joi.object({
    id: Joi
        .number()
        .integer()
        .min(1),
    name: Joi
        .string()
        .min(3)
        .max(64),
    description: Joi
        .string()
        .min(8)
        .max(2048),
    prices: Joi
        .array()
        .items(priceValidation)
});

const restaurantValidation = Joi.object({
    id: Joi
        .string()
        .uuid(),
    name: Joi
        .string()
        .min(3)
        .max(64),
    menu: Joi
        .array()
        .items(productValidation),
    address: addressValidation,
});

export const mediumRules = Joi.object({
    id: Joi
        .string()
        .uuid(),
    client: personValidation,
    driver: personValidation,
    order_details: orderDetailsValidation,
    restaurant: restaurantValidation,
});