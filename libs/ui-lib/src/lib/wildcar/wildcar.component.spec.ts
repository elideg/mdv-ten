import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcarComponent } from './wildcar.component';

describe('WildcarComponent', () => {
  let component: WildcarComponent;
  let fixture: ComponentFixture<WildcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
