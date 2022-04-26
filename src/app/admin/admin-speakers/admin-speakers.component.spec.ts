import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpeakersComponent } from './admin-speakers.component';

describe('AdminSpeakersComponent', () => {
  let component: AdminSpeakersComponent;
  let fixture: ComponentFixture<AdminSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpeakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
