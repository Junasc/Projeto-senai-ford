import { MensagemModule } from './../../componentes/mensagem/mensagem.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginComponent],
  imports: [CommonModule,LoginRoutingModule, FormsModule,MensagemModule],
  exports: [LoginComponent],
})

export class LoginModule { }
