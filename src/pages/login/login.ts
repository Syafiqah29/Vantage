// login.ts
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
user = {} as User;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth, private toastCtrl: ToastController) { }
  
  async login(user: User) {
    try{
     const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
     if (result){
     this.navCtrl.setRoot(HomePage);
     }
    }
    catch(e){
      console.error(e);
      }
    }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}