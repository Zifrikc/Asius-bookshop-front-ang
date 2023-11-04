import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books:any [] = [];
  constructor(private bookservice: BooksService,private snack:MatSnackBar ) { }

  ngOnInit(): void {
    this.bookservice.listarLibro().subscribe(
      (dato:any) => {
        this.books = dato;
        console.log(this.books);
      }
    )
  }


  eliminarEventoPorId(id: any) {
    this.bookservice.eliminarLibrosPorId(id).subscribe(
      () => {
        // Eliminación exitosa, puedes realizar alguna acción adicional si lo deseas
        console.log('Libro eliminado');
        this.snack.open('Libro eliminado', 'Cerrar', {
          duration: 2000, // Duración del mensaje de notificación
        });
        // Actualizar la lista de eventos después de eliminar uno
        this.bookservice.listarLibro().subscribe(
          (dato: any) => {
            this.books = dato;
            console.log(this.bookservice);
          }
        );
      },
      (error) => {
        console.error('Error al eliminar el libro:', error);
        this.snack.open('Error al eliminar el libro', 'Cerrar', {
          duration: 2000, // Duración del mensaje de notificación
        });
      }
    );
  }

}
