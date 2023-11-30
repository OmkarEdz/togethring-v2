import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBoxComponent } from './t-box.component';

describe('TBoxComponent', () => {
  let component: TBoxComponent;
  let fixture: ComponentFixture<TBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
