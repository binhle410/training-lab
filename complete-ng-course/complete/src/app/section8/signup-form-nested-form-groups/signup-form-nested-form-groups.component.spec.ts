import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormNestedFormGroupsComponent } from './signup-form-nested-form-groups.component';

describe('SignupFormNestedFormGroupsComponent', () => {
  let component: SignupFormNestedFormGroupsComponent;
  let fixture: ComponentFixture<SignupFormNestedFormGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormNestedFormGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormNestedFormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
