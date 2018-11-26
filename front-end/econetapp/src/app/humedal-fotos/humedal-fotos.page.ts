import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';

@Component({
  selector: 'app-humedal-fotos',
  templateUrl: './humedal-fotos.page.html',
  styleUrls: ['./humedal-fotos.page.scss'],
})
export class HumedalFotosPage implements OnInit {

  photos:any[];
  constructor(public humedal:HumedalService) { }

  ngOnInit() {
    this.photos=this.humedal.humedal.fotos;
    console.log(this.photos)
  }

}
