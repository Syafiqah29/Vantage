import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dress',
  templateUrl: 'dress.html',
})
export class DressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.setRoot(DressPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DressPage');
  }

}
