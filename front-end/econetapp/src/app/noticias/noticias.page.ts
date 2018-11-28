import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(public noticiasService:NoticiasService) { }

  noticias:any[];
  ngOnInit() {
    this.noticiasService.getEventos().subscribe((res)=>{
      this.noticias=res["eventos"];
      console.log(this.noticias);
    });
  }

}
