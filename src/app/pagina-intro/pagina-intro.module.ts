import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaIntroRoutingModule } from './pagina-intro-routing.module';
import { PaginaIntroComponent } from './pagina-intro.component';


@NgModule({
  declarations: [
    PaginaIntroComponent
  ],
  imports: [
    CommonModule,
    PaginaIntroRoutingModule
  ]
})
export class PaginaIntroModule { }
