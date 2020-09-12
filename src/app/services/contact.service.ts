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

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    const options = { headers };
    return this.http.get<Contact[]>(this.contactsUrl, options);
  }

  getContact(id: number): Observable<Contact> {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    const options = { headers };
    return this.http.get<Contact>(this.contactsUrl + '/' + id, options);
  }


  delete(id: number): Observable<Contact> {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    const options = { headers };
    return this.http.delete<Contact>(this.contactsUrl + '/' + id, options);
  }
}
