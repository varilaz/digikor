import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutatasComponent } from './kutatas.component';

describe('KutatasComponent', () => {
  let component: KutatasComponent;
  let fixture: ComponentFixture<KutatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
