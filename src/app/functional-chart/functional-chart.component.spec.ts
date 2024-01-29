import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalChartComponent } from './functional-chart.component';

describe('FunctionalChartComponent', () => {
  let component: FunctionalChartComponent;
  let fixture: ComponentFixture<FunctionalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
