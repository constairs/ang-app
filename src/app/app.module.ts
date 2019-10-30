import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { CheckboxComponent } from './checkbox.component';
import { InputComponent } from './input.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, ChildComponent, CheckboxComponent, InputComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
