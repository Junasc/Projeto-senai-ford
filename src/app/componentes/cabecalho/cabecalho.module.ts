import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule { }
