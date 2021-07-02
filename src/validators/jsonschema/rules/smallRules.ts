export const smallRules = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
            required: true,
        },
        name: {
            type: 'string',
            minLength: 3,
            maxLength: 32,
            required: true,
        },
        surname: {
            type: 'string',
            minLength: 3,
            maxLength: 32,
            required: true,
        },
        height: {
            type: 'integer',
            minimum: 175,
            maximum: 200,
            required: true,
        },
        weight: {
            type: 'integer',
            minimum: 65,
            maximum: 120,
            required: true,
        },
        birth_date: {
            type: 'date',
            format: 'date-time',
            required: true,
        },
        email: {
            type: 'string',
            format: 'email',
            required: true,
        },
        phone_number: {
            type: 'string',
            pattern: '^[0-9]{9}',
            required: true,
        },
        password: {
            type: 'string',
            minLength: 6,
            maxLength: 64,
            required: true,
        },
        repeated_password: {
            type: 'string',
            minLength: 6,
            maxLength: 64,
            required: true,
        },
    },
};