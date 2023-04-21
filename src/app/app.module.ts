import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoModule } from './todo/todo.module';
import { InputBoxComponent } from './shared/components/input-box/input-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
