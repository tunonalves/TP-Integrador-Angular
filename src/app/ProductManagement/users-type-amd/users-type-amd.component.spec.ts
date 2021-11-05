import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTypeAmdComponent } from './users-type-amd.component';

describe('UsersTypeAmdComponent', () => {
  let component: UsersTypeAmdComponent;
  let fixture: ComponentFixture<UsersTypeAmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTypeAmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTypeAmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
