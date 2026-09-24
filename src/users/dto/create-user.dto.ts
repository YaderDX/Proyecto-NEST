import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ required: true, example : 'usuario@empresa.com'})
    email: string;
    

    @ApiProperty({ required: true, example : 'Jonh Doe'})
    name: string;

    usarname?: string;

    @ApiProperty({required: true, example : 'password123'})
    password: string;

    @ApiProperty({required: true, example : 1})
    tenandId: number;

    
}
