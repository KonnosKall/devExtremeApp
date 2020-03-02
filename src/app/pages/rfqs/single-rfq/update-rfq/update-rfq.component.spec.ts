import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRfqComponent } from './update-rfq.component';

describe('UpdateRfqComponent', () => {
  let component: UpdateRfqComponent;
  let fixture: ComponentFixture<UpdateRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
