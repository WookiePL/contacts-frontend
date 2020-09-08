import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'http://localhost:8080/contacts';



  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    let options = { headers: headers };
    return this.http.get<Contact[]>(this.contactsUrl, options);
  }
}
