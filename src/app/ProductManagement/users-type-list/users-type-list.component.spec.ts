import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTypeListComponent } from './users-type-list.component';

describe('UsersTypeListComponent', () => {
  let component: UsersTypeListComponent;
  let fixture: ComponentFixture<UsersTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
