import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListWorkerComponent } from "./listWorker.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListWorkerComponent", () => {

  let fixture: ComponentFixture<ListWorkerComponent>;
  let component: ListWorkerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListWorkerComponent]
    });

    fixture = TestBed.createComponent(ListWorkerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
