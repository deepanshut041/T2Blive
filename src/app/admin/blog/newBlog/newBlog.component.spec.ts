import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NewBlogComponent } from "./newBlog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NewBlogComponent", () => {

  let fixture: ComponentFixture<NewBlogComponent>;
  let component: NewBlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NewBlogComponent]
    });

    fixture = TestBed.createComponent(NewBlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
