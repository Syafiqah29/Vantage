import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { women-s-WomenSimportimport { WomenSCategoryPage } from '../women-s-category/women-s-category';
 { WomenSCategoryPage } from '../women-s-category/women-s-category';
CategoryPage}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotowomen-s-category(){
    this.navCtrl.push(WomenSCategoryPage);
  }  

}
