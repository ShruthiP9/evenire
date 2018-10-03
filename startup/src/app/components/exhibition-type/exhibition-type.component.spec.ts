import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionTypeComponent } from './exhibition-type.component';

describe('ExhibitionTypeComponent', () => {
  let component: ExhibitionTypeComponent;
  let fixture: ComponentFixture<ExhibitionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
