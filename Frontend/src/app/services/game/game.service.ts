import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private URL = baseURL + 'task/'

  constructor(private http: HttpClient) { }

  getInfoGame(data: any) {
    return this.http.post(this.URL + 'infogame', data)
  }

  getMyGames(data: any) {
    return this.http.post(this.URL + 'mygames', data)
  }

  checkGame(data: any){
    return this.http.post(this.URL + 'checkgame', data);
  }

  buyGame(data: any){
    return this.http.post(this.URL + 'buygame', data);
  }
}
