import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {


  events:any [] = [];
  constructor(private eveservice: EventsService,private snack:MatSnackBar, private http: HttpClient ) { }
  ngOnInit(): void {
    this.eveservice.listarEvento().subscribe(
      (dato:any) => {
        this.events = dato;
        console.log(this.events);
      }
    )
  }

  eliminarEventoPorId(id: any) {
    this.eveservice.eliminarEventoId(id).subscribe(
      () => {
        // Eliminación exitosa, puedes realizar alguna acción adicional si lo deseas
        console.log('Evento eliminado');
        this.snack.open('Evento eliminado', 'Cerrar', {
          duration: 2000, // Duración del mensaje de notificación
        });
        // Actualizar la lista de eventos después de eliminar uno
        this.eveservice.listarEvento().subscribe(
          (dato: any) => {
            this.events = dato;
            console.log(this.events);
          }
        );
      },
      (error) => {
        console.error('Error al eliminar el evento:', error);
        this.snack.open('Error al eliminar el evento', 'Cerrar', {
          duration: 2000, // Duración del mensaje de notificación
        });
      }
    );
  }



}
