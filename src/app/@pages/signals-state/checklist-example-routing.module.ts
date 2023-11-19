import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckListExampleComponent } from './checklist-example.component';

const routes: Routes = [{path: '', component: CheckListExampleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckListExampleRoutingModule { }
