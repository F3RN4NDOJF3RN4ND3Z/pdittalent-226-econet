import { Component, OnInit } from '@angular/core';
import { HumedalService } from '../services/humedal.service';

@Component({
  selector: 'app-humedal-denuncias',
  templateUrl: './humedal-denuncias.page.html',
  styleUrls: ['./humedal-denuncias.page.scss'],
})
export class HumedalDenunciasPage implements OnInit {

  constructor(public humedal: HumedalService) { }

  denuncias:any[];
  ngOnInit() {
    this.denuncias=this.humedal.humedal.denuncias;
    console.log(this.denuncias);
  }

}
