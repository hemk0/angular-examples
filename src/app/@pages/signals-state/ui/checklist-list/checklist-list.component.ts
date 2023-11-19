import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checklist } from '../../intefaces/checklist';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checklist-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checklist-list.component.html',
  styleUrl: './checklist-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistListComponent {
  @Input() checklists!: Checklist[];
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Checklist>();

  constructor() {}

  trackByFn(index: number, checklist: Checklist) {
    return checklist.id;
  }
}
