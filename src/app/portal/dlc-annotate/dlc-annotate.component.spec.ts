import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcAnnotateComponent } from './dlc-annotate.component';

describe('DlcAnnotateComponent', () => {
  let component: DlcAnnotateComponent;
  let fixture: ComponentFixture<DlcAnnotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcAnnotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcAnnotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
