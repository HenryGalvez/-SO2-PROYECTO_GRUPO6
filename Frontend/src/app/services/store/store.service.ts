import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private URL = baseURL + 'game/'

  constructor(private http: HttpClient) { }

  getStoreGames() {
    return this.http.get(this.URL + 'getgames')
  }
}
