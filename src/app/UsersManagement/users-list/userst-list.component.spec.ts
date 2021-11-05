import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstListComponent } from './userst-list.component';

describe('UserstListComponent', () => {
  let component: UserstListComponent;
  let fixture: ComponentFixture<UserstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
