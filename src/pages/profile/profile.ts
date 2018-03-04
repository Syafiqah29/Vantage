import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
        this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot(HomePage));
    })
  }

 
}
