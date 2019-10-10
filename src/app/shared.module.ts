import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorChanger } from './shared/colorchanger.directive';
import { DropDownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    ColorChanger,
    DropDownDirective
  ],
  exports: [
    ColorChanger,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
})
export class SharedModule {}