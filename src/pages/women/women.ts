import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage }from '../categories/categories';
/**
 * Generated class for the WomenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-women',
  templateUrl: 'women.html',
})
export class WomenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
nextPage(){
  this.navCtrl.push(CategoriesPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad WomenPage');
  }

}
