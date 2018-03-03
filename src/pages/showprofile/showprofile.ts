import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
/**
 * Generated class for the ShowprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showprofile',
  templateUrl: 'showprofile.html',
})
export class ShowprofilePage {
  
  profileData: FirebaseObjectObservable<Profile>
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      

      this.profileData = this.afDatabase.object(`profile/${data.uid}`)
    }
    
  })
  }

  closeModal(){
    this.viewCtrl.dismiss();
      }
}
