import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInlineEdit]'
})
export class ParentDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
