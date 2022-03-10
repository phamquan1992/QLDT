import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmchitieuComponent } from './dmchitieu.component';

describe('DmchitieuComponent', () => {
  let component: DmchitieuComponent;
  let fixture: ComponentFixture<DmchitieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmchitieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmchitieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
