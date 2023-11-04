import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {
  eventId: any;
  event: any = {};
  constructor(private eveservice: EventsService,private router:Router, private route:ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.eventId = params['id'];
      this.obtenerEvento();
    });
  }
  obtenerEvento() {
    this.eveservice.obtenerEventoId(this.eventId).subscribe(
      (data: any) => {
        this.event = data;
      },
      (error) => {
        console.error('Error al obtener el evento:', error);
      }
    );
  }
  actualizarEvento() {
    this.eveservice.editarEvento(this.event).subscribe(
      () => {
        console.log('Evento actualizado');
        this.snack.open('Evento actualizado', 'Cerrar', {
          duration: 2000
        });
        this.router.navigate(['/admin/view-events']);
      },
      (error) => {
        console.error('Error al editar el evento:', error);
        this.snack.open('Error al editar el evento', 'Cerrar', {
          duration: 2000
        });
      }
    );
  }
}

