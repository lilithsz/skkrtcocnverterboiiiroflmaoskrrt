import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BildComponent } from './bild.component';

describe('BildComponent', () => {
  let component: BildComponent;
  let fixture: ComponentFixture<BildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
