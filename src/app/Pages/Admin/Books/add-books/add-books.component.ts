import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  book = {
    img :'',
    nombre :'',
    autor :'',
    editorial :'',
    publicacion :'',
    paginas :'',
    formato :'',
    isbn: '',
    genero: '',
    documento: '',
    idioma: '',
    costo: '',
    estado: '',
    sinopsis:''
  }

  constructor(private bookserviceadd:BooksService, private router:Router, private snack:MatSnackBar) { }
  ngOnInit(): void {
  }

  formSubmit(){
    if(this.book.nombre.trim() == '' || this.book.nombre == null){
      this.snack.open("  Nombre del libro requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.img.trim() == '' || this.book.img == null){
      this.snack.open("Imagen del libro  requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.sinopsis.trim() == '' || this.book.sinopsis == null){
      this.snack.open("sinopsis  requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.autor.trim() == '' || this.book.autor == null){
      this.snack.open("Autor del libro requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.editorial.trim() == '' || this.book.editorial == null){
      this.snack.open("Editorial requerida, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.publicacion.trim() == '' || this.book.publicacion == null){
      this.snack.open("Año de publicacion requerida, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.paginas.trim() == '' || this.book.paginas == null){
      this.snack.open("Paginas del libro requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.formato.trim() == '' || this.book.formato == null){
      this.snack.open("Formato requerdo, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.isbn.trim() == '' || this.book.isbn == null){
      this.snack.open("Codigo ISBN requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }
    if(this.book.genero.trim() == '' || this.book.genero == null){
      this.snack.open("Genero requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }


    if(this.book.documento.trim() == '' || this.book.documento == null){
      this.snack.open("Archivo requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.idioma.trim() == '' || this.book.idioma == null){
      this.snack.open("Idioma del libro requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.costo.trim() == '' || this.book.costo == null){
      this.snack.open("Costo requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }

    if(this.book.estado.trim() == '' || this.book.estado == null){
      this.snack.open("Estado del libro requerido, ingrese los datos !!" ,'',{duration:3000})
      return;
    }



    this.bookserviceadd.agregarLibro(this.book).subscribe(
      (dato:any) => {
        this.book.nombre = '';
        this.book.img = '';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Nuevo libro agregado',
          showConfirmButton: false,
          timer: 1500
        })
         this.router.navigate(['/admin/view-books']);
      }
    )
  }
}
