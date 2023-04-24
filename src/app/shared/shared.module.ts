import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBoxComponent } from './components/input-box/input-box.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InputBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [InputBoxComponent],
})
export class SharedModule { }
