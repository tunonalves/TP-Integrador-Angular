import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersamdComponent } from './usersamd.component';

describe('UsersamdComponent', () => {
  let component: UsersamdComponent;
  let fixture: ComponentFixture<UsersamdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersamdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersamdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
