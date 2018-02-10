import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigikorComponent } from './digikor.component';

describe('DigikorComponent', () => {
  let component: DigikorComponent;
  let fixture: ComponentFixture<DigikorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigikorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigikorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
