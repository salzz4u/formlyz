import { Component } from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent extends FieldType {

  // tslint:disable-next-line:typedef
  get type() {
    return this.to.type || 'text';
  }

}
