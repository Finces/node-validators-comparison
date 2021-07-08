const contactValidation = {
    type: 'object',
    properties: {
        phone_number: {
            type: ['string', 'null'],
            pattern: '^[0-9]{9}$'
        },
        email: {
            type: ['string', 'null'],
            format: 'email',
        },
    },
};

const personValidation = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
        },
        first_name: {
            type: 'string',
            minLength: 1,
            maxLength: 32,
        },
        last_name: {
            type: 'string',
            minLength: 3,
            maxLength: 64,
        },
        contact: contactValidation,
    },
    required: [ 'id', 'first_name', 'last_name', 'contact' ],
};

const addressValidation = {
    type: 'object',
    properties: {
        country: {
            type: 'string',
            enum: [ 'Poland' ],
        },
        city: {
            type: 'string',
            enum: [ 'Rzeszów', 'Wrocław', 'Warszawa', 'Stalowa Wola' ],
        },
        postal_code: {
            type: 'string',
            pattern: '^[0-9]{2}-[0-9]{3}$'
        },
        street: {
            type: 'string',
            minLength: 3,
            maxLength: 64,
        },
        building: {
            type: 'string',
            minLength: 1,
            maxLength: 32,
        },
    },
    required: [ 'country', 'city', 'postal_code', 'street', 'building' ],
};

const priceValidation = {
    type: 'object',
    properties: {
        amount: {
            type: 'number',
            minimum: 0.01,
        },
        currency: {
            type: 'string',
            enum: [ 'PLN', 'EUR', 'DOL' ],
        },
    },
    required: [ 'amount', 'currency' ],
};

const productValidation = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            minimum: 1,
        },
        name: {
            type: 'string',
            minLength: 3,
            maxLength: 64,
        },
        description: {
            type: 'string',
            minLength: 8,
            maxLength: 2048,
        },
        prices: {
            type: 'array',
            items: priceValidation,
        },
    },
    required: [ 'id', 'name', 'description', 'prices' ],
};

export const mediumRules = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
        },
        client: personValidation,
        driver: personValidation,
        order_details: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    minLength: 3,
                    maxLength: 64
                },
                description: {
                    type: 'string',
                    minLength: 8,
                    maxLength: 2048,
                },
                price: {
                    type: 'number',
                    minimum: 0.01,
                },
                currency: {
                    type: 'string',
                    enum: [ 'PLN', 'EUR', 'DOL' ],
                },
                delivery_address: addressValidation,
            },
            required: [ 'name', 'description', 'price', 'currency', 'delivery_address' ],
        },
        restaurant: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                },
                name: {
                    type: 'string',
                    minLength: 3,
                    maxLength: 64,
                },
                menu: {
                    type: 'array',
                    items: productValidation,
                },
                address: addressValidation,
            },
            required: [ 'id', 'name', 'menu', 'address' ],
        },
    },
    required: [ 'id', 'client', 'driver', 'order_details', 'restaurant' ],
};