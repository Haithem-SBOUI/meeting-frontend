import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetingComponent } from './all-meeting.component';

describe('AllMeetingComponent', () => {
  let component: AllMeetingComponent;
  let fixture: ComponentFixture<AllMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMeetingComponent]
    });
    fixture = TestBed.createComponent(AllMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
