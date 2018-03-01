import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DressPage } from '../dress/dress';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  nextPage(){
    this.navCtrl.push(DressPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
