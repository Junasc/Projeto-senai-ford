import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './../home/home.component';
import { PaginaIntroComponent } from './pagina-intro.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaginaIntroComponent,
  children: [
    {
      path: '',
      component: DashboardComponent,
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaIntroRoutingModule { }
