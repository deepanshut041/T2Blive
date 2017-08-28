import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AddWorkersComponent } from "./addWorkers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AddWorkersComponent", () => {

  let fixture: ComponentFixture<AddWorkersComponent>;
  let component: AddWorkersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AddWorkersComponent]
    });

    fixture = TestBed.createComponent(AddWorkersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
