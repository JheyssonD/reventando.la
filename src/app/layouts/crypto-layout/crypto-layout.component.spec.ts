import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoLayoutComponent } from './crypto-layout.component';

describe('CryptoLayoutComponent', () => {
  let component: CryptoLayoutComponent;
  let fixture: ComponentFixture<CryptoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
