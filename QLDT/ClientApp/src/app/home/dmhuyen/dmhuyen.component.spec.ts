import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhuyenComponent } from './dmhuyen.component';

describe('DmhuyenComponent', () => {
  let component: DmhuyenComponent;
  let fixture: ComponentFixture<DmhuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmhuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
