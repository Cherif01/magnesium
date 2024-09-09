import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (private http: HttpClient) {}

  // CREATE
  create (api: string, suffixURL: string, data: any): Observable<any> {
    // console.log(data);
    return this.http.post(`${BASE_URL}${api}/${suffixURL}`, data)
  }

  // UPDATE
  update(api: string, suffixUrl: string, id: any, data: any): Observable<any> {
    const url = `${BASE_URL}${api}/${suffixUrl}/${id}`;

    // Les données doivent être envoyées dans le corps de la requête PUT, pas dans les paramètres
    return this.http.put(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


  // READ GLOBAL
   getall (api: string, suffixUrl: string) {
    return this.http.get<any[]>(`${BASE_URL}${api}/${suffixUrl}`)
  }

  // GET
  getallParams(api: string, suffixUrl: string, id_: any) {
    const url = `${BASE_URL}${api}/${suffixUrl}/${id_}/`;
    let params = {
      params: {
        id: id_
      },
    }
    return this.http.get<any[]>(url, params)
  }

  // GET Unique
  getOne (api: string, suffixUrl: string, id_: any) {
    return this.http.get<any[]>(`${BASE_URL}${api}/${suffixUrl}/${id_}`)
  }

  delete (api: string, suffixUrl: any, id: any): Observable<boolean> {
    const url = `${BASE_URL}${api}/${suffixUrl}/${id}`
    return this.http.delete<boolean>(url)
  }
}
