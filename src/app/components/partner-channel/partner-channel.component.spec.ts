import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerChannelComponent } from './partner-channel.component';

describe('PartnerChannelComponent', () => {
  let component: PartnerChannelComponent;
  let fixture: ComponentFixture<PartnerChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
