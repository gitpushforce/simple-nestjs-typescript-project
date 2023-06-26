import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { CreateTaskForm } from './form/task.form';

@Injectable()
export class TasksService {

    // will be used as a temporary DB for this sample
    private tasks: Task[] = [{
        id: '1',
        title: 'first task',
        description: 'some task',
        status: TaskStatus.PENDING
    }]

    getAllTask() {
        return this.tasks
    }

    createTask(taskForm: CreateTaskForm) {
        const task = {
            id: v4(),
            title: taskForm.title,
            description: taskForm.description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)

        return task
    }

    updateTask() {
        
    }

    deleteTask() {
        
    }
}
