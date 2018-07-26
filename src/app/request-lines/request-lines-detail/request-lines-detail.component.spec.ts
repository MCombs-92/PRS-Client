import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinesDetailComponent } from './request-lines-detail.component';

describe('RequestLinesDetailComponent', () => {
  let component: RequestLinesDetailComponent;
  let fixture: ComponentFixture<RequestLinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
