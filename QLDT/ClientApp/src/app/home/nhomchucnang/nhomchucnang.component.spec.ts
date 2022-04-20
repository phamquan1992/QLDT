import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomchucnangComponent } from './nhomchucnang.component';

describe('NhomchucnangComponent', () => {
  let component: NhomchucnangComponent;
  let fixture: ComponentFixture<NhomchucnangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhomchucnangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomchucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
