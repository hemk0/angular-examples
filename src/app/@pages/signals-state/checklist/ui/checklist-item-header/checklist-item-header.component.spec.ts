import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemHeaderComponent } from './checklist-item-header.component';

describe('ChecklistItemHeaderComponent', () => {
  let component: ChecklistItemHeaderComponent;
  let fixture: ComponentFixture<ChecklistItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistItemHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecklistItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
