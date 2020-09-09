import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService,
              private modalService: NgbModal,
              private router: Router) {
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
      });
  }

  ngOnInit(): void {
  }

  deleteContact(id: number): void {
    this.openDeleteConfirmation().then(toDelete => {
      if (toDelete) {
        this.contactService.delete(id).subscribe(() => {
          this.getContacts();
        });
      }
    });
  }

  openDeleteConfirmation(): Promise<any> {
    const modalRef = this.modalService.open(ConfirmationPopupComponent);
    modalRef.componentInstance.header = 'contact.deleteConfirmation.header';
    modalRef.componentInstance.content = 'contact.deleteConfirmation.content';
    return modalRef.result;
  }

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
