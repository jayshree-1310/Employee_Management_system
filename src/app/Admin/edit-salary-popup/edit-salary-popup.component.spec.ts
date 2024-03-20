import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryPopupComponent } from './edit-salary-popup.component';

describe('EditSalaryPopupComponent', () => {
  let component: EditSalaryPopupComponent;
  let fixture: ComponentFixture<EditSalaryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSalaryPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSalaryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
