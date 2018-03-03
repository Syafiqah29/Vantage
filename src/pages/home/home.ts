import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { WomenPage } from '../women/women';
import { MenPage } from '../men/men';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
import { ShowprofilePage } from '../showprofile/showprofile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, private toast: ToastController, public modalCtrl: ModalController) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      this.toast.create({
        message: `Welcome to VANTAGE, ${data.email}`,
        duration: 3000
      }).present();

      this.profileData = this.afDatabase.object(`profile/${data.uid}`)
    }
    else {
      this.toast.create({
        message: `Could not find authentication details`,
        duration: 3000
      }).present();
    }
  })
}

  gotowomen(){
    this.navCtrl.push(WomenPage);
  }

  gotomen() {
    this.navCtrl.push(MenPage);
  }

  // signOut(){
  //   this.afAuth.auth.signOut();
  // }
  profileShow(){
    // this.navCtrl.push(ShowprofilePage);
    let modal = this.modalCtrl.create(ShowprofilePage);
    modal.present();
  }
}
