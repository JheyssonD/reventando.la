import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPVUComponent } from './account-pvu.component';

describe('AccountPVUComponent', () => {
  let component: AccountPVUComponent;
  let fixture: ComponentFixture<AccountPVUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPVUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPVUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
