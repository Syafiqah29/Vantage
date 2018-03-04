import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

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

  posts: any;

  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    // this.navCtrl.setRoot(DressPage);
    // this.http.get('gs://vantage-2018.appspot.com/15276618_1810531539202207_8823075540064796672_n.jpg').map(res => res.json).subscribe(data => {
    //   this.posts = data.data.children;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DressPage');
  }

}
