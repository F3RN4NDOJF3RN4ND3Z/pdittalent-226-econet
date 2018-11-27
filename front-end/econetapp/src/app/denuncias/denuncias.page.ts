import { Component, OnInit } from '@angular/core';
import { HumedalesService } from '../services/humedales.service';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.page.html',
  styleUrls: ['./denuncias.page.scss'],
})
export class DenunciasPage implements OnInit {

  selectedHumedal:any;
  denuncia:Denuncia=new Denuncia();
  humedales:any[];
  constructor(public humedalesService:HumedalesService) { }

  
  ngOnInit() {
    this.humedalesService.getHumedales().subscribe((res)=>{
      this.humedales=res["humedales"];
      console.log(this.humedales);
    });
  }

}

class Denuncia{
  humedalId:number;
  observaciones:string;
  usuario:string;
  data:any;
}
