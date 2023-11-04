import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  evento = {
    img :'',
    nombre :'',
    tipo :'',
    descripcion :'',
    invitado :'',
    departamento :'',
    lugar :'',
    fecha: ''


  }

  constructor(private eveserviceadd:EventsService, private router:Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.evento.nombre.trim() == '' || this.evento.nombre == null){
      this.snack.open("El titulo es requerido !!" ,'',{duration:3000})
      return;
    }

    if(this.evento.img.trim() == '' || this.evento.img == null){
      this.snack.open("La imagen del evento es requerido !!" ,'',{duration:3000})
      return;
    }

    if(this.evento.nombre.trim() == '' || this.evento.nombre == null){
      this.snack.open("El nombre del evento requerido !!" ,'',{duration:3000})
      return;
    }


    if(this.evento.tipo.trim() == '' || this.evento.tipo == null){
      this.snack.open("Tipo de evento requerido !!" ,'',{duration:3000})
      return;
    }


    if(this.evento.descripcion.trim() == '' || this.evento.descripcion == null){
      this.snack.open("Descripcion requerida !!" ,'',{duration:3000})
      return;
    }


    if(this.evento.invitado.trim() == '' || this.evento.invitado == null){
      this.snack.open("Invitado requerido !!" ,'',{duration:3000})
      return;
    }


    if(this.evento.departamento.trim() == '' || this.evento.departamento == null){
      this.snack.open("Departamento  requerido !!" ,'',{duration:3000})
      return;
    }

    if(this.evento.lugar.trim() == '' || this.evento.lugar == null){
      this.snack.open("Lugar requerido !!" ,'',{duration:3000})
      return;
    }

    if(this.evento.fecha.trim() == '' || this.evento.fecha == null){
      this.snack.open("Fecha requerida  !!" ,'',{duration:3000})
      return;
    }


    this.eveserviceadd.agregarEvento(this.evento).subscribe(
      (dato:any) => {
        this.evento.nombre = '';
        this.evento.descripcion = '';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El nuevo evento fue agregado con exito',
          showConfirmButton: false,
          timer: 1500
        })
         this.router.navigate(['/admin/view-events']);
      }
    )}}
