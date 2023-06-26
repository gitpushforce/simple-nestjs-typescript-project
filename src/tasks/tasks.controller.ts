import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskForm } from './form/task.form'

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskForm) {
        console.log(newTask)
        return this.tasksService.createTask(newTask)
       // return 'saving ...'
    }

}
