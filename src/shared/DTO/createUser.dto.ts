import { IsString, IsNotEmpty, IsEmail, MaxLength } from "class-validator";


export class CreateUserDto {

@IsNotEmpty()
@IsString()
name : string;

@IsEmail()
email : string

@IsString()
@MaxLength(15)
password : string

}