import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({required: true, example: 'usuario@empresa.com'})
    email: string;

    @ApiProperty({required: true, example: 'password123'})
    password: string;
}