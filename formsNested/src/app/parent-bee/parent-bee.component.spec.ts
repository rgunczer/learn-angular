import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBeeComponent } from './parent-bee.component';

describe('ParentBeeComponent', () => {
  let component: ParentBeeComponent;
  let fixture: ComponentFixture<ParentBeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentBeeComponent]
    });
    fixture = TestBed.createComponent(ParentBeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
