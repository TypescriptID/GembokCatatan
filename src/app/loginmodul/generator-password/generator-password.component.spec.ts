import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPasswordComponent } from './generator-password.component';

describe('GeneratorPasswordComponent', () => {
  let component: GeneratorPasswordComponent;
  let fixture: ComponentFixture<GeneratorPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
