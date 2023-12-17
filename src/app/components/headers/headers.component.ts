import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modals/modal.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit() {
  }
  openModal(): void {
      this.modalService.Subscribe();
  }

}
