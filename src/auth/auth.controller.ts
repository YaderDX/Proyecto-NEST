import { Controller , Body, Post} from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(
        @Body() data: LoginDto
    ){
        //Login Logic
    }
}
