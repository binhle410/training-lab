import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormAsyncComponent } from './signup-form-async.component';

describe('SignupFormAsyncComponent', () => {
  let component: SignupFormAsyncComponent;
  let fixture: ComponentFixture<SignupFormAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
