import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HumedalesService {

  url_humedales="http://localhost:3000/humedals";
  constructor(public http: HttpClient) { }

  getHumedales(){
    return this.http.get(this.url_humedales);
  }
}
