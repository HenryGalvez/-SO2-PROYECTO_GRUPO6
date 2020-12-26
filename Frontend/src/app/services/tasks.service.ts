import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from './shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = baseURL + 'task/'

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.URL + 'tasks')
  }

  createTask(data: any) {
    return this.http.post(this.URL + 'insert-task', data);
  }

  delteTask(data: any){
    return this.http.post(this.URL + 'delete-task', data);
  }
}
