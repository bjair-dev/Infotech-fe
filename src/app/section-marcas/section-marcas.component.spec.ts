import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMarcasComponent } from './section-marcas.component';

describe('SectionMarcasComponent', () => {
  let component: SectionMarcasComponent;
  let fixture: ComponentFixture<SectionMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
