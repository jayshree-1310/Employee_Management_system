import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:9090/api';

  addTasks(data: any) {
    return this.http.post(this.url + '/addTask', data);
  }
  getTasks(email: any) {
    return this.http.get(this.url + '/getTask' + '/' + email);
  }
  updateTaskStatus(taskId: any, newStatus: string) {
    return this.http.put(
      this.url + '/changeStatus' + '/' + taskId + '/status/' + newStatus,
      null
    );
  }
  deleteTask(id: any) {
    return this.http.delete(this.url + '/deleteTask' + '/' + id);
  }
  updateTask(id: any, description: any) {
    return this.http.put(this.url + '/updateTask' + '/' + id, description);
  }
}
