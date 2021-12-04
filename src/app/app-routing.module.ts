import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
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
    path:'services',
    loadChildren:() => import('./services/services.module').then(m => m.ServicesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
