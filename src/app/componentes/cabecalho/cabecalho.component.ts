import { Component } from '@angular/core';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent  {
  user$:any = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, public router: Router) {}

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
