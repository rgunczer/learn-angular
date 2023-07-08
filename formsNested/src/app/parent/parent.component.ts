import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  frm = new FormGroup({});

  ngOnInit(): void {
      console.log('ParentComponent -> OnInit');
  }

  onFill(): void {
    this.frm.patchValue({
      personal: {
        first: 'foo',
        last: 'bar'
      }
    });
  }

}
