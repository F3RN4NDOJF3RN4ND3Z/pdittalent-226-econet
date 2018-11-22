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

const routes: Routes = [
{ path: 'tabs', 
  component: HomePage,
  children: [ 
    {
      path:'humedales', 
      outlet:'humedales',
      component: HumedalesPage
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
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path:'home',
  redirectTo: '/tabs/(noticias:noticias)',
},
{ path: 'humedal_detail', loadChildren: './humedal-detail/humedal-detail.module#HumedalDetailPageModule' },
{ path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
{ path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomePageModule,HumedalesPageModule,NoticiasPageModule,NotificacionesPageModule,DenunciasPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
