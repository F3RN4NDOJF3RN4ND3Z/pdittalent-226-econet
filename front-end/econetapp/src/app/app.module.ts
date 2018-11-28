import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HumedalesService } from './services/humedales.service';
import { HttpClientModule } from '@angular/common/http';
import { HumedalService } from './services/humedal.service';
import { AngularFireModule} from '@angular/fire';
import { AngularFireMessagingModule} from '@angular/fire/messaging';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import { NoticiasService } from './services/noticias.service';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HumedalesService,
    HumedalService,
    Camera,
    NoticiasService,
    Firebase
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
