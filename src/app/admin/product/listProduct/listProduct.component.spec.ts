import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListProductComponent } from "./listProduct.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListProductComponent", () => {

  let fixture: ComponentFixture<ListProductComponent>;
  let component: ListProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListProductComponent]
    });

    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
