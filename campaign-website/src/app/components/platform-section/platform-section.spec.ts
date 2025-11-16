import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSection } from './platform-section';

describe('PlatformSection', () => {
  let component: PlatformSection;
  let fixture: ComponentFixture<PlatformSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
