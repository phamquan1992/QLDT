import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmbcheaderComponent } from './dmbcheader.component';

describe('DmbcheaderComponent', () => {
  let component: DmbcheaderComponent;
  let fixture: ComponentFixture<DmbcheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmbcheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmbcheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
