import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WomenPage } from '../women/women';
import { MenPage } from '../men/men';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotowomen(){
    this.navCtrl.push(WomenPage);
  }

  gotomen() {
    this.navCtrl.push(MenPage);
  }

}
