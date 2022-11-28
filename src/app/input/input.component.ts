import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type?: string = 'text';
  @Input() name?: string = '';

  // @Input() formControl?: FormControl;
  formControl = new FormControl('');
}
