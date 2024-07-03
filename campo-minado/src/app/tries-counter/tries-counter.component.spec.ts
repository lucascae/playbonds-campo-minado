import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriesCounterComponent } from './tries-counter.component';

describe('TriesCounterComponent', () => {
  let component: TriesCounterComponent;
  let fixture: ComponentFixture<TriesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriesCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
