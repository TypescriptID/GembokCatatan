import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeteranganPasswordComponent } from './keterangan-password.component';

describe('KeteranganPasswordComponent', () => {
  let component: KeteranganPasswordComponent;
  let fixture: ComponentFixture<KeteranganPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeteranganPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeteranganPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
