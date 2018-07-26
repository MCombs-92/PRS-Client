import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinesEditComponent } from './request-lines-edit.component';

describe('RequestLinesEditComponent', () => {
  let component: RequestLinesEditComponent;
  let fixture: ComponentFixture<RequestLinesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLinesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
