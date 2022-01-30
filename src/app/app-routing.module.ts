import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  //English
  {
    path:'',
    loadChildren:() => import('./home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'contact',
    loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'galery',
    loadChildren:() => import('./galery/galery.module').then(m => m.GaleryModule)
  },
  {
    path:'videos',
    loadChildren:() => import('./videos/videos.module').then(m =>m.VideosModule)
  },
  {
    path:'services',
    loadChildren:() => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path:'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path:'**',
  //   loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  // },
  //Spanish
  {
    path:'es',
    loadChildren:() => import('./home-es/home-es.module').then(m => m.HomeEsModule)
  },
  {
    path:'galery/es',
    loadChildren:() => import ('./galery-es/galery-es.module').then(m => m.GaleryEsModule)
  },
  {
    path:'services/es',
    loadChildren:() => import('./services-es/services-es.module').then(m => m.ServicesEsModule)
  },
  {
    path:'videos/es',
    loadChildren:() => import('./videos-es/videos-es.module').then(m => m.VideosEsModule)
  },
  {
    path:'contact/es',
    loadChildren:() => import ('./contact-es/contact-es.module').then(m => m.ContactEsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
