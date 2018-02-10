import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektekComponent } from './projektek.component';

describe('ProjektekComponent', () => {
  let component: ProjektekComponent;
  let fixture: ComponentFixture<ProjektekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
