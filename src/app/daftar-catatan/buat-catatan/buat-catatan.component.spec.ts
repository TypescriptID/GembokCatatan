import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatCatatanComponent } from './buat-catatan.component';

describe('BuatCatatanComponent', () => {
  let component: BuatCatatanComponent;
  let fixture: ComponentFixture<BuatCatatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatCatatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatCatatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
