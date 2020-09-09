import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
  @Input() header: string;
  @Input() content: string;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }


  confirmOperation(): void {
    this.activeModal.close(true);
  }
}
