import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient :HttpClient, private usuarioService: UsuarioService) {}

  //envia usuario e senha pra api e tenta pegar o token se for retornado(login com sucesso)
  //salva token se for retornado
  autenticar(userName: string, password: string): Observable<HttpResponse<any>>
  {
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      { userName, password },
      { observe: 'response' }
    ).pipe(
      tap((res) =>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
