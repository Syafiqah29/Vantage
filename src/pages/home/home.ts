import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WomenPage } from '../women/women';
import { MenPage } from '../men/men';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController) {

  }

  // ionViewDidLoad(){
  //   console.log('ionViewDidLoad HomePage');
  // }

  gotowomen(){
    this.navCtrl.push(WomenPage);
  }

  gotomen() {
    this.navCtrl.push(MenPage);
  }

  signOut(){
    this.afAuth.auth.signOut();
  }
}
