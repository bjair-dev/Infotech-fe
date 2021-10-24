import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVentajasComponent } from './section-ventajas.component';

describe('SectionVentajasComponent', () => {
  let component: SectionVentajasComponent;
  let fixture: ComponentFixture<SectionVentajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVentajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
