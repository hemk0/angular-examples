import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Checklist } from './intefaces/checklist';
import { ChecklistService } from './services/check-list.service';
import { ModalComponent } from "../../@components/modal/modal.component";
import { FormModalComponent } from "../../@components/form-modal/form-modal.component";
import { ChecklistListComponent } from "./ui/checklist-list/checklist-list.component";

@Component({
    selector: 'app-signals-state',
    standalone: true,
    templateUrl: './checklist-example.component.html',
    styleUrl: './checklist-example.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ModalComponent, FormModalComponent, ChecklistListComponent]
})
export class CheckListExampleComponent {
  cs = inject(ChecklistService);
  fb = inject(FormBuilder);

  checklists = this.cs.checklists;
  error = this.cs.error;
  checklistBeingEdited = signal<Partial<Checklist> | null>(null);

  checklistForm = this.fb.nonNullable.group({
    title: ["", Validators.required],
  });

  constructor() {
    // TODO: Use [patchValue] directive to react to signal in template
    effect(() => {
      const checklist = this.checklistBeingEdited();

      if (checklist) {
        this.checklistForm.patchValue({
          title: checklist.title,
        });
      }
    });
  }
}
