// login.ts
import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
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


  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private afAuth: AngularFireAuth, private toastCtrl: ToastController) { }
  
  async login(user: User) {
    try{
     const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
     if (result){
     this.navCtrl.setRoot(ProfilePage);
     
     }
    //  else {

    //    this.navCtrl.setRoot(LoginPage);
    //  }
    }
    catch(e) {
      console.error(e);
      }
    }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  forgotPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Enter your Email',
      message: "A new password will be sent to your email",
      inputs:[{
        name: 'recoverEmail',
        placeholder: 'you@example.com'
      },],
      buttons: [
      {
        text: 'Cancel',
        handler: data =>{
          console.log('Cancel clicked');
        }
      },
    {
      text: 'Submit',
      handler: data => {
        console.log(" password recover sent " + data.recoverEmail)
      }
    }
  ]
    });prompt.present();
  }

  forgotPasswordUser(email: any){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}