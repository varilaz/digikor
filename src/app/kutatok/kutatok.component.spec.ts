import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutatokComponent } from './kutatok.component';

describe('KutatokComponent', () => {
  let component: KutatokComponent;
  let fixture: ComponentFixture<KutatokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutatokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
