import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductAmdComponent } from './category-product-amd.component';

describe('CategoryProductAmdComponent', () => {
  let component: CategoryProductAmdComponent;
  let fixture: ComponentFixture<CategoryProductAmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductAmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductAmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
