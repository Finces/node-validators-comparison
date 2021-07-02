export const smallRules = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
            minLength: 3,
            maxLength: 32,
        },
        surname: {
            type: 'string',
            minLength: 3,
            maxLength: 32,
        },
        height: {
            type: 'integer',
            minimum: 175,
            maximum: 200,
        },
        weight: {
            type: 'integer',
            minimum: 65,
            maximum: 120,
        },
        birth_date: {
            type: 'object',
            format: 'date-time',
        },
        email: {
            type: 'string',
            format: 'email',
        },
        phone_number: {
            type: 'string',
            pattern: '^[0-9]{9}',
        },
        password: {
            type: 'string',
            minLength: 6,
            maxLength: 64,
        },
        repeated_password: {
            type: 'string',
            const: {
                $data: '/password',
            },
        },
    },
    required: [ "id", "name", "surname", "height", "weight", "birth_date", "email", "phone_number", "password", "repeated_password" ],
};