import { Controller ,Get,Post,Param,Delete,Patch,Req,} from "@nestjs/common";
import{Request } from "express"

@Controller('/user')
export class UserController{
    @Get()
    getUser()
    {
        return {name:'sakshi',
                email:'sakshipancham@gmail.com'};
    }
    
    @Post()
    store(@Req() req:Request)//here you get data from postman
    {
        return(req.body);
    }
    
    @Patch('/:userId')
    update(@Req() req: Request){
        return req.body;
    }
    
    @Get('/:userId')
    GetUser(@Param() params:{ userId: number})
    {
        return params;
    }
    
    @Delete('/:userId')
    deleteUser(@Param() params: {userId: Number}){
        return params;
    }
}