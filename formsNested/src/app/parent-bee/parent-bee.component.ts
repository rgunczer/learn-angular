import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-bee',
  templateUrl: './parent-bee.component.html',
  styleUrls: ['./parent-bee.component.scss']
})
export class ParentBeeComponent {
  frm = new FormGroup({
    bee: new FormControl('bee')
  });

  ngOnInit(): void {
      console.log('ParentComponent -> OnInit');
  }

}
