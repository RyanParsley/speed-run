import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'speed-run-layout',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, NavComponent],
  template: `
    <header>{{ title }}</header>
    <speed-run-nav />
    <div class="content">
      <ng-content />
    </div>
  `,
  styles: `
      html {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      body {
        margin: 0;
        background: #efefef;
        height: 100%;
        display: flex;
        overflow: hidden;
      }
      speed-run-layout {
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow-x: auto;
        padding: 0 1rem 1rem;
        header {
          background: #333;
          padding: 2rem 2.5rem 2.5rem;
          margin: 0 -1rem;
          color: #fff;
          font-size: 2.5rem;
        }
        .content {
          padding: 1rem;
          width: 90%;
          max-width: 62rem;
          margin: 0 auto;
          background: #fff;
          border-radius: 3px;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          flex: 1;
        }
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @Input() title = '';
}
