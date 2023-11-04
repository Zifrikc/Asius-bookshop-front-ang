import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  libroId: any;
  libro: any = {};
  books:any []=[];
  constructor( private bookservice: BooksService, private router:Router, private route:ActivatedRoute, ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.libroId = params['id'];
      this.obtenerLibro();
    }),
    this.bookservice.listarLibro().subscribe(
      (dato:any) => {
        this.books = dato;
        console.log(this.books);
      }
    )

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
