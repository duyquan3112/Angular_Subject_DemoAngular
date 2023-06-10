import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuTableComponent } from './cpu-table.component';

describe('CpuTableComponent', () => {
  let component: CpuTableComponent;
  let fixture: ComponentFixture<CpuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
