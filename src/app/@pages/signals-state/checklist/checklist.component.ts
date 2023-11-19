import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChecklistItem } from '../intefaces/checklist-item';
import { ChecklistService } from '../services/check-list.service';
import { ChecklistItemService } from '../services/checklist-item.service';
import { ModalComponent } from "../../../@components/modal/modal.component";
import { FormModalComponent } from "../../../@components/form-modal/form-modal.component";
import { ChecklistItemListComponent } from "./ui/checklist-item-list/checklist-item-list.component";
import { ChecklistItemHeaderComponent } from "./ui/checklist-item-header/checklist-item-header.component";

@Component({
    selector: 'app-checklist',
    standalone: true,
    templateUrl: './checklist.component.html',
    styleUrl: './checklist.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ModalComponent, FormModalComponent, ChecklistItemListComponent, ChecklistItemHeaderComponent]
})
export class ChecklistComponent {
  cs = inject(ChecklistService);
  cis = inject(ChecklistItemService);
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);

  checklistItemBeingEdited = signal<Partial<ChecklistItem> | null>(null);

  params = toSignal(this.route.paramMap);

  items = computed(() =>
    this.cis
      .checklistItems()
      .filter((item) => item.checklistId === this.params()?.get("id"))
  );

  checklist = computed(() =>
    this.cs
      .checklists()
      .find((checklist) => checklist.id === this.params()?.get("id"))
  );

  checklistItemForm = this.fb.nonNullable.group({
    title: ["", Validators.required],
  });

  constructor() {
    // TODO: Use [patchValue] directive to react to signal in template
    effect(() => {
      const item = this.checklistItemBeingEdited();
      if (item) {
        this.checklistItemForm.patchValue({
          title: item.title,
        });
      }
    });
  }
}
