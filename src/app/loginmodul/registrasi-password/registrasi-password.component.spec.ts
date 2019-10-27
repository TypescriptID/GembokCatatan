import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasiPasswordComponent } from './registrasi-password.component';

describe('RegistrasiPasswordComponent', () => {
  let component: RegistrasiPasswordComponent;
  let fixture: ComponentFixture<RegistrasiPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrasiPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasiPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
