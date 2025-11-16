import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsDisplay } from './testimonials-display';

describe('TestimonialsDisplay', () => {
  let component: TestimonialsDisplay;
  let fixture: ComponentFixture<TestimonialsDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
