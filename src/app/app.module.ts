import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { WomenPage } from '../pages/women/women';
import { MenPage } from '../pages/men/men';
import { CategoriesPage } from '../pages/categories/categories';
import { DressPage } from '../pages/dress/dress';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ShowprofilePage } from '../pages/showprofile/showprofile';
import { ProfilePage } from '../pages/profile/profile';

var config = {
  apiKey: "AIzaSyBs_7vackdKKp3sP8dcoqMG7YPIuwfuEzc",
  authDomain: "vantage-2018.firebaseapp.com",
  databaseURL: "https://vantage-2018.firebaseio.com",
  projectId: "vantage-2018",
  storageBucket: "vantage-2018.appspot.com",
  messagingSenderId: "391351072737"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WomenPage,
    MenPage,
    CategoriesPage,
    DressPage,
    LoginPage,
    SignupPage,
    ShowprofilePage,
    ProfilePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WomenPage,
    MenPage,
    CategoriesPage,
    DressPage,
    LoginPage,
    SignupPage,
    ShowprofilePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
