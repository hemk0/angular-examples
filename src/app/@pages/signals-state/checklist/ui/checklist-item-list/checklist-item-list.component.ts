import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checklist-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist-item-list.component.html',
  styleUrl: './checklist-item-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistItemListComponent {

}
