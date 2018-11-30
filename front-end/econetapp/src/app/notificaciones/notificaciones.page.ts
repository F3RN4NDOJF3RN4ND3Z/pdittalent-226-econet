import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones:any[];
  constructor(public notificacionesService: NotificacionesService) { }

  ngOnInit() {
    this.notificaciones=this.notificacionesService.notificaciones;
  }

}
