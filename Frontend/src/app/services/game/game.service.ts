import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private URL = baseURL + 'game/'

  constructor(private http: HttpClient) { }

  insertGame(data: any) {
    return this.http.post(this.URL + 'savegame', data)
  }

  getInfoGame(data: any) {
    return this.http.post(this.URL + 'infogame', data)
  }

  getMyGames(data: any) {
    return this.http.post(this.URL + 'getmigames', data)
  }

  checkGame(data: any){
    return this.http.post(this.URL + 'checkgame', data);
  }

  buyGame(data: any){
    return this.http.post(this.URL + 'download', data);
  }
}
