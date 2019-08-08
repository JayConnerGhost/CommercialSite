import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinformsComponent } from './winforms.component';

describe('WinformsComponent', () => {
  let component: WinformsComponent;
  let fixture: ComponentFixture<WinformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
