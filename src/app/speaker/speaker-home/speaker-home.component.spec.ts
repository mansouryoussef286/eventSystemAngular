import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerHomeComponent } from './speaker-home.component';

describe('SpeakerHomeComponent', () => {
  let component: SpeakerHomeComponent;
  let fixture: ComponentFixture<SpeakerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
