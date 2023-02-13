import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureBodyComponent } from './furniture-body.component';

describe('FurnitureBodyComponent', () => {
  let component: FurnitureBodyComponent;
  let fixture: ComponentFixture<FurnitureBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
