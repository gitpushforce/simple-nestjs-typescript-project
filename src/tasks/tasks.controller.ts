import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get('hello')
    HelloWold() {
        return 'Hello World'
    }

}
