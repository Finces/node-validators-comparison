import { IsDate, IsEmail, IsInt, IsString, IsUUID, Length, Matches, Max, Min } from "class-validator";
import { Match } from "../custom/Match";

export class SmallRules {
    @IsUUID(4)
    id: string;

    @IsString()
    @Length(3, 32)
    name: string;

    @IsString()
    @Length(3, 32)
    surname: string;

    @IsInt()
    @Min(175)
    @Max(200)
    height: number;

    @IsInt()
    @Min(65)
    @Max(120)
    weight: number;

    @IsDate()
    birth_date: Date;

    @IsEmail()
    email: string;

    @Matches('^[0-9]{9}')
    phone_number: string;

    @IsString()
    @Length(6, 64)
    password: string;

    @Match('password')
    repeated_password: string;
}