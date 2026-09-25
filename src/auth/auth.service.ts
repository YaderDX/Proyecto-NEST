import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService){}

    async validateUser(User: LoginDto){
        const foundUser = await this.prisma.user.findUnique({
            where:{
                email: User.email
            }
        })
        if(!foundUser) return null;

        const  isPasswordValid = await bcrypt.compare(User.password, foundUser.password);
        if(isPasswordValid){
            return this.jwtService.sign({
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
            });
        }else{
            throw new UnauthorizedException('Credenciales Invalidas')
        }   
    }
}
