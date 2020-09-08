import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contactService.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
      });
  }
  ngOnInit(): void { }
  // ngOnInit(): void {
  //   let url = 'http://localhost:8080/user';
  //
  //   let headers: HttpHeaders = new HttpHeaders({
  //     'Authorization': 'Basic ' + sessionStorage.getItem('token')
  //   });
  //
  //   let options = { headers: headers };
  //   this.http.post<Observable<Object>>(url, {}, options).
  //   subscribe(principal => {
  //       this.userName = principal['name'];
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         alert('Unauthorized');
  //       }
  //     }
  //   );
  // }
  //
  // logout() {
  //   sessionStorage.setItem('token', '');
  // }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

}
