import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileCreateComponent } from './form-profile-create.component';

describe('FormProfileCreateComponent', () => {
  let component: FormProfileCreateComponent;
  let fixture: ComponentFixture<FormProfileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
