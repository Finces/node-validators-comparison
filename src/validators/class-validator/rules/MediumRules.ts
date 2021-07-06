import {
    IsArray,
    IsEmail, IsEnum, IsInt, IsNotEmpty, IsNumber,
    IsObject, IsPositive,
    IsString,
    IsUUID,
    Length,
    Matches,
    ValidateIf,
    ValidateNested
} from "class-validator";
import { City, Country, Currency } from "../../../payloads/Medium";
import { Type } from "class-transformer";

export class MediumRules {
    @IsUUID(4)
    id: string;

    @IsObject()
    @ValidateNested()
    @Type(() => Person)
    client: Person;

    @IsObject()
    @ValidateNested()
    @Type(() => Person)
    driver: Person;

    @IsObject()
    @ValidateNested()
    @Type(() => OrderDetails)
    order_details: OrderDetails;

    @IsObject()
    @ValidateNested()
    @Type(() => Restaurant)
    restaurant: Restaurant;
}

class Person {
    @IsUUID(4)
    id: string;

    @IsString()
    @Length(3, 32)
    first_name: string;

    @IsString()
    @Length(3, 64)
    last_name: string;

    @IsObject()
    @ValidateNested()
    @Type(() => Contact)
    contact: Contact;
}

class Contact {
    @ValidateIf(({ phone_number, email }: Contact) => email === null || phone_number !== null)
    @Matches('^[0-9]{9}')
    phone_number?: string;

    @ValidateIf(({ phone_number, email }: Contact) => phone_number === null || email !== null)
    @IsEmail()
    email?: string;
}

class OrderDetails {
    @IsString()
    @Length(3, 64)
    name: string;

    @IsString()
    @Length(8, 2048)
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsEnum(Currency)
    currency: Currency;

    @IsObject()
    @ValidateNested()
    @Type(() => Address)
    delivery_address: Address;
}

class Restaurant {
    @IsUUID(4)
    id: string;

    @IsString()
    @Length(3, 64)
    name: string;

    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Product)
    menu: Product[];

    @IsObject()
    @ValidateNested()
    @Type(() => Address)
    address: string;
}

class Address {
    @IsEnum(Country)
    country: Country;

    @IsEnum(City)
    city: City;

    @IsString()
    @Matches(/^[0-9]{2}-[0-9]{3}$/)
    postal_code: string;

    @IsString()
    @Length(3, 64)
    street: string;

    @IsString()
    @Length(1, 32)
    building: string;
}

class Product {
    @IsNumber()
    @IsInt()
    @IsPositive()
    id: number;

    @IsString()
    @Length(3, 64)
    name: string;

    @IsString()
    @Length(8, 2048)
    description: string;

    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Price)
    prices: Price[];
}

class Price {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsEnum(Currency)
    currency: Currency;
}