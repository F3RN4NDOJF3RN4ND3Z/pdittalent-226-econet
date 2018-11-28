import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url_eventos="http://localhost:3000/eventos";
  constructor(public http:HttpClient) { }

  getEventos(){
    return this.http.get(this.url_eventos);
  }
}
