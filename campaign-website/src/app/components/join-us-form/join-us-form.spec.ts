import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsForm } from './join-us-form';

describe('JoinUsForm', () => {
  let component: JoinUsForm;
  let fixture: ComponentFixture<JoinUsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinUsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinUsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
