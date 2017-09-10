import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DetailBlogComponent } from "./detailBlog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DetailBlogComponent", () => {

  let fixture: ComponentFixture<DetailBlogComponent>;
  let component: DetailBlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DetailBlogComponent]
    });

    fixture = TestBed.createComponent(DetailBlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
