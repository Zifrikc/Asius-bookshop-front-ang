import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios:any [] = [];
  constructor(private usersService:UsersService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usersService.listarUsuarios().subscribe(
      (dato:any) => {
        this.usuarios = dato;
        console.log(this.usuarios);
      }
    )
  }

}

