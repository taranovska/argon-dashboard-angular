import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalWindowsComponent } from "./modal-windows.component";

describe("ModalWindowsComponent", () => {
  let component: ModalWindowsComponent;
  let fixture: ComponentFixture<ModalWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalWindowsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
