import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SajtoComponent } from './sajto.component';

describe('SajtoComponent', () => {
  let component: SajtoComponent;
  let fixture: ComponentFixture<SajtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SajtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SajtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
