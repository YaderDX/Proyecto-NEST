import { Controller , Body, Post, HttpException, HttpStatus} from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Accounts')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    @ApiOperation({summary: 'Iniciar sesion y obtener un token'

    })
    @ApiBody({ type: LoginDto})
    async login(
        @Body() data: LoginDto
    ){
        const usertoken = await this.authService.validateUser(data);

        if(!usertoken) throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

        return usertoken;
    }
}
