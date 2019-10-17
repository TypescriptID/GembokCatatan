import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatatanRahasiaListComponent } from './catatan-rahasia-list.component';

describe('CatatanRahasiaListComponent', () => {
  let component: CatatanRahasiaListComponent;
  let fixture: ComponentFixture<CatatanRahasiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatatanRahasiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatatanRahasiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
