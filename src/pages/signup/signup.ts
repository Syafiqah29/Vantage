import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
 
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth) {
   
  }
 
  async signup( user: User) {
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(result);
    this.navCtrl.setRoot(LoginPage);
    
  }
    catch(e){
      console.error(e);
    } 
    
     
  }
}

