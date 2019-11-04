import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormFormArrayComponent } from './signup-form-form-array.component';

describe('SignupFormFormArrayComponent', () => {
  let component: SignupFormFormArrayComponent;
  let fixture: ComponentFixture<SignupFormFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
