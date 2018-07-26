import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinesListComponent } from './request-lines-list.component';

describe('RequestLinesListComponent', () => {
  let component: RequestLinesListComponent;
  let fixture: ComponentFixture<RequestLinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLinesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
