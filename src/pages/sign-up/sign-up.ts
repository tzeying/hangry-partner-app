import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cognitoIdentityServiceProvider: CognitoIdentityServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  async signUp() {
    //TODO: Need to integrate with validation :), including UI
    try {
      await this.cognitoIdentityServiceProvider.signUp({
        ClientId: '53g8sahi3orns9npjtj4o1q8ua',
        Username: this.email,
        Password: this.password
      }).promise();
    }
    catch (e) {      
      //TODO: Print error message maybe?
      console.log(e.message)
    }
  }
}
