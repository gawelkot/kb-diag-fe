import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseToolComponent } from './diagnose-tool.component';

describe('DiagnoseToolComponent', () => {
  let component: DiagnoseToolComponent;
  let fixture: ComponentFixture<DiagnoseToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnoseToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnoseToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
