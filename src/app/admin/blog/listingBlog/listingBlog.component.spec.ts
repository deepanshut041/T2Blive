import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListingBlogComponent } from "./listingBlog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListingBlogComponent", () => {

  let fixture: ComponentFixture<ListingBlogComponent>;
  let component: ListingBlogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListingBlogComponent]
    });

    fixture = TestBed.createComponent(ListingBlogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
