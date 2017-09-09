import { AdminService } from "./admin.service";
import { TestBed } from "@angular/core/testing";

describe("AdminService", () => {

  let service: AdminService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminService
      ]
    });
    service = TestBed.get(AdminService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
