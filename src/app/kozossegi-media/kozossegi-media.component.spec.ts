import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KozossegiMediaComponent } from './kozossegi-media.component';

describe('KozossegiMediaComponent', () => {
  let component: KozossegiMediaComponent;
  let fixture: ComponentFixture<KozossegiMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KozossegiMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KozossegiMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
