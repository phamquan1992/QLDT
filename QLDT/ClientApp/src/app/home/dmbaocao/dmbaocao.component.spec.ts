import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmbaocaoComponent } from './dmbaocao.component';

describe('DmbaocaoComponent', () => {
  let component: DmbaocaoComponent;
  let fixture: ComponentFixture<DmbaocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmbaocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmbaocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
