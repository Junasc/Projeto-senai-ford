import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: ()=> import ('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'pagina-intro' ,
    loadChildren: ()=> import('./pagina-intro/pagina-intro.module').then((m)=>m.PaginaIntroModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
