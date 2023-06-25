import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTask() {
        return [{
            id: 1,
            title: 'first task',
            description: 'some task'
        }]
    }

    createTask() {
        
    }

    updateTask() {
        
    }

    deleteTask() {
        
    }
}
