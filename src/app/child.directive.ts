import {Directive, forwardRef, Inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {ParentDirective} from './parent.directive';

@Directive({
  selector: '[appShowOnEdit]'
})
export class ChildDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
              @Inject(forwardRef(() => ParentDirective)) private parent: ParentDirective) {
    console.log('parent', parent);
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
