import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteExplanationComponent } from './site-explanation.component';

describe('SiteExplanationComponent', () => {
  let component: SiteExplanationComponent;
  let fixture: ComponentFixture<SiteExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
