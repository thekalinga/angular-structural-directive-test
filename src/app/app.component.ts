import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 *appInlineEdit>
      From parent<br>
      <span *appShowOnEdit>From child</span>
    </h1>
  `
})
export class AppComponent { }
