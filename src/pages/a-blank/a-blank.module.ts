import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ABlankPage } from './a-blank';

@NgModule({
  declarations: [
    ABlankPage,
  ],
  imports: [
    IonicPageModule.forChild(ABlankPage),
  ],
})
export class ABlankPageModule {}
