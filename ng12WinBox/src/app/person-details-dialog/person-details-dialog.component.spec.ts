import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsDialogComponent } from './person-details-dialog.component';

describe('PersonDetailsDialogComponent', () => {
  let component: PersonDetailsDialogComponent;
  let fixture: ComponentFixture<PersonDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
