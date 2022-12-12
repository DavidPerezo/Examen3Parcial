import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuebleService {
 myAppUrl: string = environment.endpoint;
 myApiUrl: string = 'api/Muebles/'


  constructor(private http: HttpClient) { }

  getMuebles(): Observable<any> {
   return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
