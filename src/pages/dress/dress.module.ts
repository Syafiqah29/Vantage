import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DressPage } from './dress';

@NgModule({
  declarations: [
    DressPage,
  ],
  imports: [
    IonicPageModule.forChild(DressPage),
  ],
})
export class DressPageModule {}
