export type Medium = {
    id: string;
    client: Person;
    driver: Person;
    order_details: OrderDetails;
    restaurant: Restaurant;
};

type Address = {
    country: string;
    city: string;
    postal_code: string;
    street: string;
    building: string;
};

type Restaurant = {
    id: string;
    name: string;
    menu: Product[];
    address: Address;
};

type Person = {
    id: string;
    first_name: string;
    last_name: string;
    contact: Contact;
};

type OrderDetails = {
    name: string;
    description: string;
    price: number;
    currency: string;
    delivery_address: Address;
};

type Product = {
    id: number;
    name: string;
    description: string;
    prices: Price[];
};

type Contact = {
    phone_number?: string;
    email?: string;
};

type Price = {
    amount: number;
    currency: string;
};

export enum Country {
    POLAND = 'Poland',
}

export enum City {
    RZESZOW = 'Rzeszów',
    WARSZAWA = 'Warszawa',
    WROCLAW = 'Wrocław',
    STALOWA_WOLA = 'Stalowa Wola',
}

export enum Currency {
    PLN = 'PLN',
    EUR = 'EUR',
    DOL = 'DOL',
}