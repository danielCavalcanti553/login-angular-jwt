import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from 'src/model/message';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(obj : any) : Observable<any>{
    //console.log(this.formGroup.value);
    return this.http.post<Message>(environment.apiAuth,
    obj,
    {
      observe: 'response',
      responseType: 'json'
    })


  }
}
