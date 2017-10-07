import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatenotesComponent } from './privatenotes.component';

describe('PrivatenotesComponent', () => {
  let component: PrivatenotesComponent;
  let fixture: ComponentFixture<PrivatenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
