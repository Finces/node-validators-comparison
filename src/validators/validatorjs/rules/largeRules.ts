const uuidValidation = () => ([ 'required', 'regex:/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/' ]);

const contactValidation = () => ({
    phone_number: [ 'regex:/^[0-9]{9}$/' ],
    email: [ 'email' ],
});

const personValidation = () => ({
    id: uuidValidation(),
    first_name: 'required|string|min:1|max:32',
    last_name: 'required|string|min:3|max:64',
    contact: contactValidation(),
});

const addressValidation = () => ({
    country: 'required|string|in:Poland',
    city: 'required|string|in:Rzeszów,Warszawa,Wrocław,Stalowa Wola',
    postal_code: [ 'required', 'regex:/^[0-9]{2}-[0-9]{3}$/' ],
    street: 'required|string|min:3|max:64',
    building: 'required|string|min:1|max:32',
});

const priceValidation = () => ({
    amount: 'required|numeric|min:0.01',
    currency: 'required|in:PLN,EUR,DOL',
});

const productValidation = () => ({
    id: 'required|numeric|integer|min:1',
    name: 'required|string|min:3|max:64',
    description: 'required|string|min:8|max:2048',
    'prices.*': priceValidation(),
});

export const largeRules = {
    id: uuidValidation(),
    client: personValidation(),
    driver: personValidation(),
    order_details: {
        name: 'required|string|min:3|max:64',
        description: 'required|string|min:8|max:2048',
        price: 'required|numeric|min:0.01',
        currency: 'required|string|in:PLN,EUR,DOL',
        delivery_address: addressValidation(),
    },
    restaurant: {
        id: uuidValidation(),
        name: 'required|string|min:3|max:64',
        'menu.*': productValidation(),
        address: addressValidation(),
    },
};