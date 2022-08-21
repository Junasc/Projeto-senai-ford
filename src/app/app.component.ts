import { UsuarioService } from './autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoFord';

  constructor(public router: Router, authService:UsuarioService ) {
    if (!authService.estaLogado()) {
      router.navigate(['login']);
    }
  }
}
