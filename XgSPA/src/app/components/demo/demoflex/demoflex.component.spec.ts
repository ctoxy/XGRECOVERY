import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoflexComponent } from './demoflex.component';

describe('DemoflexComponent', () => {
  let component: DemoflexComponent;
  let fixture: ComponentFixture<DemoflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
