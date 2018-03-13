import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cognitoIdentityServiceProvider: CognitoIdentityServiceProvider,
    public facebook: Facebook
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebookLogin() {
    console.log('hi?');
    this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  async login() {

    let pool = new CognitoUserPool({
      ClientId: '',
      UserPoolId: ''
    });

    let user = new CognitoUser({
      Username: this.email,
      Pool: pool
    });

    let authDetails = new AuthenticationDetails({
      Username: '',
      Password: ''
    })

    user.authenticateUser(authDetails, {
      onSuccess: null,
      onFailure: null
    });
  }
}
