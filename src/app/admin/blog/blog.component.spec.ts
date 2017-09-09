import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BlogComponent", () => {

  let fixture: ComponentFixture<BlogComponent>;
  let component: BlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BlogComponent]
    });

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
