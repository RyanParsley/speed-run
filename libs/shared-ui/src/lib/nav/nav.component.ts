import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'speed-run-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul class="primary">
        @for (link of primaryNav; track link.href) {
        <li>
          <a
            [routerLink]="link.href"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ link.text }}</a
          >
        </li>
        }
      </ul>
      <ul class="secondary">
        @for (link of secondaryNav; track link.href) {
        <li>
          <a
            [routerLink]="link.href"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ link.text }}</a
          >
        </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      border: solid 1px #333;
      margin: 1rem;
      padding: .5rem .75rem;
      border-radius: .5rem;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    ul {
      display: flex;
      padding:0;
      margin:0;
      flex: 1;
      gap: 1rem;
    }
    ul.secondary {
      justify-content: flex-end;
    }
    li {
        display: inline-block;
    }
    a {
      display: inline-block;
      padding: .5rem .25rem .25rem;
      text-decoration: none;
      color: #333;
    }
    .secondary a {
      border-bottom: .25rem solid #999;
    }
    .secondary a:hover {
      border-bottom-color: #333;
    }
    .primary a {
      background: #efefef;
      border-radius: .5rem;
      padding: .5rem 1rem .5rem;
    }
    .primary a:hover {
      background: #666;
      color: #fff;
    }
    .primary a.active, {
      background: #999;
      color: #000;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() primaryNav: Array<{ text: string; href: string }> = [];
  @Input() secondaryNav: Array<{ text: string; href: string }> = [];
}
