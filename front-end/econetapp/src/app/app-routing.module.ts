import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { HumedalesPage } from './humedales/humedales.page';
import { NotificacionesPage } from './notificaciones/notificaciones.page';
import { NoticiasPage } from './noticias/noticias.page';
import { HomePageModule } from './home/home.module';
import { NoticiasPageModule } from './noticias/noticias.module';
import { NotificacionesPageModule } from './notificaciones/notificaciones.module';
import { HumedalesPageModule } from './humedales/humedales.module';
import { DenunciasPageModule } from './denuncias/denuncias.module';
import { DenunciasPage } from './denuncias/denuncias.page';
import { HumedalDetailPage } from './humedal-detail/humedal-detail.page';
import { HumedalDetailPageModule } from './humedal-detail/humedal-detail.module';
import { HumedalHomePage } from './humedal-home/humedal-home.page';
import { HumedalFotosPage } from './humedal-fotos/humedal-fotos.page';
import { HumedalHomePageModule } from './humedal-home/humedal-home.module';
import { HumedalFotosPageModule } from './humedal-fotos/humedal-fotos.module';
import { HumedalDenunciasPage } from './humedal-denuncias/humedal-denuncias.page';
import { HumedalNoticiasPage } from './humedal-noticias/humedal-noticias.page';
import { HumedalDenunciasPageModule } from './humedal-denuncias/humedal-denuncias.module';
import { HumedalNoticiasPageModule } from './humedal-noticias/humedal-noticias.module';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
{ path: 'tabs', 
  component: HomePage,
  children: [ 
    {
      path:'humedales', 
      outlet:'humedales',
      component: HumedalesPage,
    } ,
    {
      path:'notificaciones', 
      outlet:'notificaciones', 
      component: NotificacionesPage
    },
    {
      path:'noticias', 
      outlet:'noticias', 
      component: NoticiasPage
    },
    {
      path:'denuncias', 
      outlet:'denuncias', 
      component: DenunciasPage
    }
  ]
  ,
  canActivate : [AuthguardService]
},
{
  path: 'home',
  redirectTo: '/tabs/(noticias:noticias)',
  pathMatch: 'full',
  canActivate : [AuthguardService]
},
{ 
  path: 'humedal_detail', 
  component:HumedalDetailPage,
  children: [
    {
      path: 'principal',
      outlet:'principal',
      component: HumedalHomePage
    },
    {
      path: 'fotos',
      outlet:'fotos',
      component: HumedalFotosPage
    },
    {
      path: 'denuncias_humedal',
      outlet:'denuncias_humedal',
      component: HumedalDenunciasPage
    },
    {
      path: 'noticias_humedal',
      outlet: 'noticias_humedal',
      component: HumedalNoticiasPage
    }
  ],
  canActivate : [AuthguardService]
  },
  {
    path: 'humedal',
    pathMatch: 'full',
    redirectTo: '/humedal_detail/(principal:principal)',
    canActivate : [AuthguardService]
  },
  {
    path: 'humedales',
    pathMatch: 'full',
    redirectTo: '/tabs/(humedales:humedales)',
    canActivate : [AuthguardService]
  },
//{ path: 'humedales', loadChildren: './humedales/humedales.module#HumedalesPageModule' },
{ path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
{ path: 'login', 
  component: LoginPage
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule,
    HumedalDetailPageModule,
    HumedalesPageModule,
    NoticiasPageModule,
    NotificacionesPageModule,
    DenunciasPageModule,
    HumedalHomePageModule,
    HumedalFotosPageModule,
    HumedalDenunciasPageModule,
    HumedalNoticiasPageModule,
    LoginPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
