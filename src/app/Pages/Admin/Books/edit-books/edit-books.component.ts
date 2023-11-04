import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  libroId: any;
  libro: any = {};
  constructor( private bookservice: BooksService, private router:Router, private route:ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
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
  actualizarLibro() {
    this.bookservice.editarLibro(this.libro).subscribe(
      () => {
        console.log('Libro actualizado');
        this.snack.open('Libro actualizado', 'Cerrar', {
          duration: 2000
        });
        this.router.navigate(['/admin/view-books']);
      },
      (error) => {
        console.error('Error al editar el Libro:', error);
        this.snack.open('Error al editar el Libro', 'Cerrar', {
          duration: 2000
        });
      }
    );
  }
}
