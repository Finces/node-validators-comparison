import { Schema } from "valivar";
import { uuid } from "../custom/uuid";
import { integer, integerError } from "../custom/integer";

const contactValidation = new Schema({
    phone_number: {
        type: String,
        required: false,
        match: /[0-9]{9}/,
    },
    email: {
        type: String,
        required: false,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    },
});

const personValidation = new Schema({
    id: {
        type: String,
        required: true,
        match: uuid,
    },
    first_name: {
        type: String,
        required: true,
        length: { min: 1, max: 32 },
    },
    last_name: {
        type: String,
        required: true,
        length: { min: 3, max: 64 },
    },
    contact: contactValidation,
});

const addressValidation = new Schema({
    country: {
        type: String,
        required: true,
        enum: [ 'Poland' ],
    },
    city: {
        type: String,
        required: true,
        enum: [ 'Rzeszów', "Warszawa", 'Wrocław', 'Stalowa Wola' ],
    },
    postal_code: {
        type: String,
        required: true,
        match: /[0-9]{2}-[0-9]{3}/,
    },
    street: {
        type: String,
        required: true,
        length: { min: 3, max: 64 },
    },
    building: {
        type: String,
        required: true,
        length: { min: 1, max: 32 },
    },
});

const priceValidation = new Schema({
    amount: {
        type: Number,
        required: true,
        length: { min: 0.01 },
    },
    currency: {
        type: String,
        required: true,
        enum: [ 'PLN', 'EUR', 'DOL' ],
    },
});

const productValidation = new Schema({
    id: {
        type: Number,
        required: true,
        length: { min: 1 },
        use: { integer },
    },
    name: {
        type: String,
        required: true,
        length: { min: 3, max: 64 },
    },
    description: {
        type: String,
        required: true,
        length: { min: 8, max: 2048 },
    },
    prices: [ priceValidation ],
});

export const largeRules = new Schema({
    id: {
        type: String,
        required: true,
        match: uuid,
    },
    client: personValidation,
    driver: personValidation,
    order_details: {
        name: {
            type: String,
            required: true,
            length: { min: 3, max: 64 },
        },
        description: {
            type: String,
            required: true,
            length: { min: 8, max: 2048 },
        },
        price: {
            type: Number,
            required: true,
            length: { min: 0.01 },
        },
        currency: {
            type: String,
            required: true,
            enum: [ 'PLN', 'EUR', 'DOL' ],
        },
        delivery_address: addressValidation,
    },
    restaurant: {
        id: {
            type: String,
            required: true,
            match: uuid,
        },
        name: {
            type: String,
            required: true,
            length: { min: 3, max: 64 },
        },
        menu: [ productValidation ],
        address: addressValidation,
    },
})
    .message({
        integer: integerError,
    });