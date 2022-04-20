import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacvuComponent } from './tacvu.component';

describe('TacvuComponent', () => {
  let component: TacvuComponent;
  let fixture: ComponentFixture<TacvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
