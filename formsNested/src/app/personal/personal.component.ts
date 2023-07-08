import { Component, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class PersonalComponent implements OnInit {
  protected parentForm!: FormGroup;
  private parent = inject(FormGroupDirective);

  ngOnInit(): void {
    console.log('PersonalComponent -> OnInit');

    this.parentForm = this.parent.form;
    this.parentForm.addControl(
      'personal',
      new FormGroup({
        first: new FormControl('jozsi'),
        last: new FormControl(),
      })
    );
  }
}
