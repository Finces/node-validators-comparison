const contactValidation = {
    phone_number: {
        type: [ 'string', 'null' ],
        pattern: '^[0-9]{9}',
        required: false,
    },
    email: {
        type: [ 'string', 'null' ],
        format: 'email',
        required: false,
    },
};

const personValidation = {
    id: {
        type: 'string',
        format: 'uuid',
        required: true,
    },
    first_name: {
        type: 'string',
        required: true,
        minLength: 1,
        maxLength: 32,
    },
    last_name: {
        type: 'string',
        required: true,
        minLength: 3,
        maxLength: 64,
    },
    contact: {
        type: 'object',
        properties: contactValidation,
    },
};

const addressValidation = {
    country: {
        type: 'string',
        required: true,
        enum: [ 'Poland' ],
    },
    city: {
        type: 'string',
        required: true,
        enum: [ 'Rzeszów', 'Warszawa', 'Wrocław', 'Stalowa Wola' ],
    },
    postal_code: {
        type: 'string',
        required: true,
        pattern: '^[0-9]{2}-[0-9]{3}$',
    },
    street: {
        type: 'string',
        required: true,
        minLength: 3,
        maxLength: 64,
    },
    building: {
        type: 'string',
        required: true,
        minLength: 1,
        maxLength: 32,
    },
};

const priceValidation = {
    amount: {
        type: 'number',
        required: true,
        minimum: 0.01,
    },
    currency: {
        type: 'string',
        required: true,
        enum: [ 'PLN', 'EUR', 'DOL' ],
    },
};

const productValidation = {
    id: {
        type: 'integer',
        required: true,
        minimum: 1,
    },
    name: {
        type: 'string',
        required: true,
        minLength: 3,
        maxLength: 64,
    },
    description: {
        type: 'string',
        required: true,
        minLength: 8,
        maxLength: 2048,
    },
    prices: {
        type: 'array',
        required: true,
        items: {
            type: 'object',
            properties: priceValidation,
        },
    },
};

export const mediumRules = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            required: true,
            format: 'uuid',
        },
        client: {
            type: 'object',
            properties: personValidation,
        },
        driver: {
            type: 'object',
            properties: personValidation,
        },
        order_details: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    required: true,
                    minLength: 3,
                    maxLength: 64,
                },
                description: {
                    type: 'string',
                    required: true,
                    minLength: 8,
                    maxLength: 2048,
                },
                price: {
                    type: 'number',
                    required: true,
                    minimum: 0.01,
                },
                currency: {
                    type: 'string',
                    required: true,
                    enum: [ 'PLN', 'EUR', 'DOL' ],
                },
                delivery_address: {
                    type: 'object',
                    properties: addressValidation,
                },
            },
        },
        restaurant: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    required: true,
                    format: 'uuid',
                },
                name: {
                    type: 'string',
                    required: true,
                    minLength: 3,
                    maxLength: 64,
                },
                menu: {
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        properties: productValidation,
                    },
                },
                address: {
                    type: 'object',
                    properties: addressValidation,
                },
            },
        },
    },
};