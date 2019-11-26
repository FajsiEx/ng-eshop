import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQualityComponent } from './section-quality.component';

describe('SectionQualityComponent', () => {
  let component: SectionQualityComponent;
  let fixture: ComponentFixture<SectionQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
