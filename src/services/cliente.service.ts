import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getLista() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.api}/clientes`);
  }

  buscaById(id : string) : Observable<Cliente>{
    return this.http.get<Cliente>(`${environment.api}/clientes/${id}`);
  }
  
   update(obj : Cliente){
    return this.http.put<Cliente[]>(
      `${environment.api}/clientes/${obj.id}`,
      obj,
      {
        observe: 'response',
        responseType: 'json'
      }
      );
  }
  
  new(obj : Cliente){
    return this.http.post<Cliente[]>(
      `${environment.api}/clientes`,
      obj,
      {
        observe: 'response',
        responseType: 'json'
      }
      );
  }

  delete(id : string) : Observable<String>{
    return this.http.delete<String>(`${environment.api}/clientes/${id}`);
  }
}
