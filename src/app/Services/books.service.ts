import { Injectable } from '@angular/core';
import urlbase from './helper';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  public listarLibro(){
    return this.http.get(`${urlbase}/book/listar`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public agregarLibro(books:any){
    return this.http.post(`${urlbase}/book/agregar`,books,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  public editarLibro(books:any){
    return this.http.put(`${urlbase}/book/modificar`,books,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  public obtenerLibroPorId(id:any){
    return this.http.get(`${urlbase}/book/${id}`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  public eliminarLibrosPorId(id:any){
    return this.http.delete(`${urlbase}/book/eliminar/${id}`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

}
