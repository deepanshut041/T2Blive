import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListBlogComponent } from "./listBlog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListBlogComponent", () => {

  let fixture: ComponentFixture<ListBlogComponent>;
  let component: ListBlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListBlogComponent]
    });

    fixture = TestBed.createComponent(ListBlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
