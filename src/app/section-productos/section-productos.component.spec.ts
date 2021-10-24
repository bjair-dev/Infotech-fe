import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductosComponent } from './section-productos.component';

describe('SectionProductosComponent', () => {
  let component: SectionProductosComponent;
  let fixture: ComponentFixture<SectionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
