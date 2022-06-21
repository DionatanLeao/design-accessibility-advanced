import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public open(config: ModalConfig) {
    console.log('open called');
    return new ModalRef();
  }
}

export interface ModalConfig {
  templateRef: any;
  title: any;
}

export class ModalRef {
  
  public close(): void {
    console.log('close called')
  }
}
