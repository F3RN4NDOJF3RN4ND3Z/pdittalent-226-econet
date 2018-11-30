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
},
{
  path: 'home',
  redirectTo: '/tabs/(noticias:noticias)',
  pathMatch: 'full'
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
  ]},
  {
    path: 'humedal',
    pathMatch: 'full',
    redirectTo: '/humedal_detail/(principal:principal)'
  },
  {
    path: 'humedales',
    pathMatch: 'full',
    redirectTo: '/tabs/(humedales:humedales)'
  },
//{ path: 'humedales', loadChildren: './humedales/humedales.module#HumedalesPageModule' },
{ path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
{ path: '', loadChildren: './login/login.module#LoginPageModule' }
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
    HumedalNoticiasPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
