import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checklist } from '../../../intefaces/checklist';

@Component({
  selector: 'app-checklist-item-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist-item-header.component.html',
  styleUrl: './checklist-item-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistItemHeaderComponent {
  @Input() checklist!: Checklist;
  @Output() resetChecklist = new EventEmitter<string>();
  @Output() addItem = new EventEmitter<void>();
}
