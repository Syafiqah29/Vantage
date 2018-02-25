import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WomenPage } from '../women/women';

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


}
