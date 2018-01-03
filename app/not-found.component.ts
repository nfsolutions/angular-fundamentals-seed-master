import {Component} from "@angular/core";

@Component({
  selector: 'not-found',
  template: `
  <div>
    404 Not found <a routerLink="/">Go Home</a>
  </div>
  `
})

export class NotFoundComponent{}
