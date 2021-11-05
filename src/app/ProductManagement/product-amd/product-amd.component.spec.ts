import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAMDComponent } from './product-amd.component';

describe('ProductAMDComponent', () => {
  let component: ProductAMDComponent;
  let fixture: ComponentFixture<ProductAMDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAMDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
