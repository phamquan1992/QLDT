import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCTComponent } from './modal-ct.component';

describe('ModalCTComponent', () => {
  let component: ModalCTComponent;
  let fixture: ComponentFixture<ModalCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
