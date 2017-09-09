import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditBlogComponent } from "./editBlog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EditBlogComponent", () => {

  let fixture: ComponentFixture<EditBlogComponent>;
  let component: EditBlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EditBlogComponent]
    });

    fixture = TestBed.createComponent(EditBlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
