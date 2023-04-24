import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {

  @ViewChild('txtDescription')
  public tagDescription!: ElementRef<HTMLInputElement>

  @Output()
  public onValue = new EventEmitter()

  emitValue(value: string): void{
    this.onValue.emit(value)
    this.tagDescription.nativeElement.value = ''
    
  }

}
