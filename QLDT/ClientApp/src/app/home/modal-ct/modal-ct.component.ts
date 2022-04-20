import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-ct',
  templateUrl: './modal-ct.component.html',
  styleUrls: ['./modal-ct.component.css']
})
export class ModalCTComponent implements OnInit {

  constructor() { }
  showModal = false;
  ngOnInit(): void {
  }
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
