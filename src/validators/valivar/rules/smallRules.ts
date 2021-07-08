import { Schema } from 'valivar';

const password_match = (val, ctx) => val === ctx.password;

export const smallRules = new Schema({
    id: {
        type: String,
        required: true,
        match: /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
    },
    name: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    surname: {
        type: String,
        required: true,
        length: { min: 3, max: 32 },
    },
    height: {
        type: Number,
        required: true,
        length: { min: 175, max: 200 },
    },
    weight: {
        type: Number,
        required: true,
        length: { min: 65, max: 120 },
    },
    birth_date: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    },
    phone_number: {
        type: String,
        required: true,
        match: /^[0-9]{9}/,
    },
    password: {
        type: String,
        required: true,
        length: { min: 6, max: 64 },
    },
    repeated_password: {
        type: String,
        required: true,
        use: { password_match },
    },
})
    .message({
        password_match: 'Passwords must match!',
    });