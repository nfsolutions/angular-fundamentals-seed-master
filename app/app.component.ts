import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}">
          Home
        </a>
        <a
          routerLink="/upps"
          routerLinkActive="active">
          404
        </a>
        <router-outlet></router-outlet>
      </nav>
    </div>`
})

export class AppComponent {
}
