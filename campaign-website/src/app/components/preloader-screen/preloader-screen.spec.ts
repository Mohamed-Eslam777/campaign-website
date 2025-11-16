import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderScreen } from './preloader-screen';

describe('PreloaderScreen', () => {
  let component: PreloaderScreen;
  let fixture: ComponentFixture<PreloaderScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreloaderScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloaderScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
