import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicnotesComponent } from './publicnotes.component';

describe('PublicnotesComponent', () => {
  let component: PublicnotesComponent;
  let fixture: ComponentFixture<PublicnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
