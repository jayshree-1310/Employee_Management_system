import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentPopupComponent } from './add-department-popup.component';

describe('AddDepartmentPopupComponent', () => {
  let component: AddDepartmentPopupComponent;
  let fixture: ComponentFixture<AddDepartmentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDepartmentPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDepartmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
