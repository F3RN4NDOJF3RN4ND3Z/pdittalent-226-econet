import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  notificaciones:Notificacion[]=
  [
    {
      fuente:"1",
      tipo:"evento",
      linkTo:"",
      unread:true,
      title:"Evento en el humedal 1"
    },
    {
      fuente:"1",
      tipo:"denuncia",
      linkTo:"",
      unread:true,
      title:"Denuncia en el humedal 1"
    },
    {
      fuente:"1",
      tipo:"denuncia",
      linkTo:"",
      unread:true,
      title:"Denuncia en el humedal 1"
    },
    {
      fuente:"1",
      tipo:"evento",
      linkTo:"",
      unread:true,
      title:"Evento en el humedal 1"
    }
  ]
  
 

  constructor() { }

  getNotificaciones(){

  }
}
class Notificacion{
  fuente:string;
  tipo:string;
  linkTo:string;
  unread:boolean;
  title:string;
}