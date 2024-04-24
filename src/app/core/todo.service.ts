import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  addTasks(data: any) {
    return this.http.post('http://localhost:9090/api/addTask', data);
  }
  getTasks(email: any) {
    return this.http.get('http://localhost:9090/api/getTask' + '/' + email);
  }
  updateTaskStatus(taskId: any, newStatus: string) {
    return this.http.put(
      'http://localhost:9090/api/changeStatus' +
        '/' +
        taskId +
        '/status/' +
        newStatus,
      null
    );
  }
  deleteTask(id: any) {
    return this.http.delete('http://localhost:9090/api/deleteTask' + '/' + id);
  }
  updateTask(id: any, description: any) {
    return this.http.put(
      'http://localhost:9090/api/updateTask' + '/' + id,
      description
    );
  }
}
