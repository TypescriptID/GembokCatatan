import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCatatanComponent } from './detail-catatan.component';

describe('DetailCatatanComponent', () => {
  let component: DetailCatatanComponent;
  let fixture: ComponentFixture<DetailCatatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCatatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCatatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
