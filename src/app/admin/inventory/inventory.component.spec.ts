import { NO_ERRORS_SCHEMA } from "@angular/core";
import { InventoryComponent } from "./inventory.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("InventoryComponent", () => {

  let fixture: ComponentFixture<InventoryComponent>;
  let component: InventoryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [InventoryComponent]
    });

    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
