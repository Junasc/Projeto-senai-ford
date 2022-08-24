import { AutenticacaoService } from '../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private userService: UsuarioService,
    private router: Router
  ) {
    if (this.userService.estaLogado()){
      this.router.navigate(['home']);
    }

  }

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (error) => {
        alert('usuário ou senha inválido.');
        console.log('error 28: ' + error);
      }
    );
  }
}
