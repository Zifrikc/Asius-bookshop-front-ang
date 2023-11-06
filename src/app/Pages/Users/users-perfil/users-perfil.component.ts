import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-users-perfil',
  templateUrl: './users-perfil.component.html',
  styleUrls: ['./users-perfil.component.css']
})
export class UsersPerfilComponent implements OnInit {
  user:any=null

  constructor( private login:LoginService) { }

  ngOnInit(): void {
    this.user = this.login.getuser();
  }

}
