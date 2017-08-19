import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreComponent } from './store.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('StoreComponent', () => {

  let fixture: ComponentFixture<StoreComponent>;
  let component: StoreComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StoreComponent]
    });

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });
  
});
