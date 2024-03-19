import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentPopupComponent } from './edit-department-popup.component';

describe('EditDepartmentPopupComponent', () => {
  let component: EditDepartmentPopupComponent;
  let fixture: ComponentFixture<EditDepartmentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDepartmentPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDepartmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
