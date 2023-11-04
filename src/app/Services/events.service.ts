import { Injectable } from '@angular/core';
import urlbase from './helper';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(private http:HttpClient) { }
  public listarEvento(){
    return this.http.get(`${urlbase}/evento/listar`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public agregarEvento(events:any){
    return this.http.post(`${urlbase}/evento/agregar`,events,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public editarEvento(events:any){
    return this.http.put(`${urlbase}/evento/modificar`,events,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }


  public obtenerEventoId(id:any){
    return this.http.get(`${urlbase}/evento/${id}`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public eliminarEventoId(id:any){
    return this.http.delete(`${urlbase}/evento/eliminar/${id}`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }



}
