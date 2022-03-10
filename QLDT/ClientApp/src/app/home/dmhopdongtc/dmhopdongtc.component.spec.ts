import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhopdongtcComponent } from './dmhopdongtc.component';

describe('DmhopdongtcComponent', () => {
  let component: DmhopdongtcComponent;
  let fixture: ComponentFixture<DmhopdongtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmhopdongtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhopdongtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
