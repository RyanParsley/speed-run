import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '@speed-run/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  providers: [HttpClient],
  selector: 'speed-run-root',
  template: `
    <speed-run-layout
      [title]="title"
      [primaryNav]="primaryNav"
      [secondaryNav]="secondaryNav"
    >
      <router-outlet></router-outlet>
    </speed-run-layout>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Speedrun';
  primaryNav = [
    { text: 'Home', href: 'home' },
    { text: 'Notes', href: 'note' },
    { text: 'Users', href: 'user' },
  ];
  secondaryNav = [
    { text: 'Account', href: 'account' },
    { text: 'Log Out', href: 'logout' },
  ];
}
