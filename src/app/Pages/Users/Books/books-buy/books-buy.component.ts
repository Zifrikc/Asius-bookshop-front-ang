import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-books-buy',
  templateUrl: './books-buy.component.html',
  styleUrls: ['./books-buy.component.css']
})
export class BooksBuyComponent implements OnInit {
  libroId: any;
  libro: any = {};
  user:any=null
  constructor( private bookservice: BooksService,private login:LoginService, private router:Router, private route:ActivatedRoute,) { }


  ngOnInit(): void {
    this.user = this.login.getuser();
    this.route.queryParams.subscribe(params => {
      this.libroId = params['id'];
      this.obtenerLibro();
    });
  }

  obtenerLibro() {
    this.bookservice.obtenerLibroPorId(this.libroId).subscribe(
      (data: any) => {
        this.libro = data;
      },
      (error) => {
        console.error('Error al obtener el libro:', error);
      }
    );
  }
}
