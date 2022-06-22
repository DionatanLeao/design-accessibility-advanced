import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';
import { ModalConfig } from '../interfaces/model-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements OnInit {

  @HostBinding('@fade') fade = true;
  public config: ModalConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
