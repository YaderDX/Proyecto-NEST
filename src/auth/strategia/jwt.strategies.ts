import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy , ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'your-secret-key',
        });
    }
    async validate(payload: any){ 
    return{
        UserID: payload.id,
        email: payload.email,
        role: payload.role,
    };
    }
}