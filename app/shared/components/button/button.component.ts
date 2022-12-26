import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'etiya-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  
  @Input() buttonColor:string ="orange"
  @Input() buttonText!:string | undefined;
  @Input() icon!:string | null
  @Input() callbackFunction!: void;
  @Output() onClickButton = new EventEmitter<void>();

  clickButton() {
    this.onClickButton.emit(this.callbackFunction);
  }

  // @Output() click = new EventEmitter<any>();
   
  // onClick(event: Event) {
  // this.click.emit(event);
  // }

}
