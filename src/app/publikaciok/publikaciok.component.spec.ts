import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublikaciokComponent } from './publikaciok.component';

describe('PublikaciokComponent', () => {
  let component: PublikaciokComponent;
  let fixture: ComponentFixture<PublikaciokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublikaciokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublikaciokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
