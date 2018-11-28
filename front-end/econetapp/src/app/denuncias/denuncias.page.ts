import { Component, OnInit } from '@angular/core';
import { HumedalesService } from '../services/humedales.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.page.html',
  styleUrls: ['./denuncias.page.scss'],
})
export class DenunciasPage implements OnInit {

  selectedHumedal:any;
  denuncia:Denuncia=new Denuncia();
  humedales:any[];
  adjuntos:any[];
  constructor(public humedalesService:HumedalesService, public camera:Camera) { }

  
  ngOnInit() {
    this.humedalesService.getHumedales().subscribe((res)=>{
      this.humedales=res["humedales"];
      console.log(this.humedales);
    });
    this.adjuntos=[];
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  fileChange(event) {
    this.adjuntos.push(event.target.files);
    console.log(this.adjuntos);
  }

  borrarAdjunto(archivo){
    console.log(archivo);
    for (var i =0; i < this.adjuntos.length; i++){
      if (this.adjuntos[i] === archivo) {
          this.adjuntos.splice(i,1);
          break;
      }
    }
    
  }

}

class Denuncia{
  humedalId:number;
  observaciones:string;
  usuario:string;
  data:any;
}
