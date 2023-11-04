import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import urlbase from './helper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient,private loginService: LoginService) { }

  public insertarusuario (user:any){
    return this.httpClient.post(`${urlbase}/usuario/registrarUsuario`, user);
  }

  public listarUsuarios() {
    const currentUser = this.loginService.getuser();
    const currentUserId = currentUser ? currentUser.idusurios : null;

    return this.httpClient.get<any[]>(`${urlbase}/usuario/listar`).pipe(
      map(users => users.filter(user => user.idusurios !== currentUserId))
    );
  }
}
