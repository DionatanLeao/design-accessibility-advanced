import { ComponentFactory, ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalConfig } from '../interfaces/model-config';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.componentFactory.create(this.injector);
    console.log('open called');
    return new ModalRef();
  }

}

export class ModalRef {

  public close(): void {
    console.log('close called')
  }

}
