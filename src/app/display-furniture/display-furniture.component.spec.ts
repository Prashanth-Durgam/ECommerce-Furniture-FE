import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFurnitureComponent } from './display-furniture.component';

describe('DisplayFurnitureComponent', () => {
  let component: DisplayFurnitureComponent;
  let fixture: ComponentFixture<DisplayFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
