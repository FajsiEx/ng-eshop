import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPhoto(id: number) {
    return this.http.get(this.URL + 'photos/' + id);
  }

}
