import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = +param;
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this.contactService.getContact(id).subscribe(
      contact => {
      this.contact = contact;
    });
  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }
}
