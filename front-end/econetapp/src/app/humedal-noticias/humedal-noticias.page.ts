import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';

@Component({
  selector: 'app-humedal-noticias',
  templateUrl: './humedal-noticias.page.html',
  styleUrls: ['./humedal-noticias.page.scss'],
})
export class HumedalNoticiasPage implements OnInit {

  noticias:any[];
  constructor(public humedal:HumedalService) { }

  ngOnInit() {
    this.noticias=this.humedal.humedal.eventos;
    console.log(this.noticias);
  }

}
