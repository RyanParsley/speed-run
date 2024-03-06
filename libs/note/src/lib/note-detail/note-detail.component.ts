import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-run-note-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>note-detail works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailComponent {}