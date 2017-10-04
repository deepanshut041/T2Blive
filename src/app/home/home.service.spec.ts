import { HomeService } from "./home.service";
import { TestBed } from "@angular/core/testing";

describe("HomeService", () => {

  let service: HomeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService
      ]
    });
    service = TestBed.get(HomeService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
