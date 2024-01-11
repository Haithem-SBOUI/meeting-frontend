import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWithRoomIdComponent } from './join-with-room-id.component';

describe('JoinWithRoomIdComponent', () => {
  let component: JoinWithRoomIdComponent;
  let fixture: ComponentFixture<JoinWithRoomIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinWithRoomIdComponent]
    });
    fixture = TestBed.createComponent(JoinWithRoomIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
