import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarrouselComponent } from './section-carrousel.component';

describe('SectionCarrouselComponent', () => {
  let component: SectionCarrouselComponent;
  let fixture: ComponentFixture<SectionCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
