import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeptComponent } from './manage-dept.component';

describe('ManageDeptComponent', () => {
  let component: ManageDeptComponent;
  let fixture: ComponentFixture<ManageDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDeptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
