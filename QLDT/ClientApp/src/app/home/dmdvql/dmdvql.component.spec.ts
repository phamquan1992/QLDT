import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmdvqlComponent } from './dmdvql.component';

describe('DmdvqlComponent', () => {
  let component: DmdvqlComponent;
  let fixture: ComponentFixture<DmdvqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmdvqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmdvqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
