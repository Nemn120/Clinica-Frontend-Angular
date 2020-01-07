import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyViewComponent } from './specialty-view.component';

describe('SpecialtyViewComponent', () => {
  let component: SpecialtyViewComponent;
  let fixture: ComponentFixture<SpecialtyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
