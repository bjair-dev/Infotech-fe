import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProOferComponent } from './section-pro-ofer.component';

describe('SectionProOferComponent', () => {
  let component: SectionProOferComponent;
  let fixture: ComponentFixture<SectionProOferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProOferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProOferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
