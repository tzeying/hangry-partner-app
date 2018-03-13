import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders';
import { PickupOrderPage } from '../pickup-order/pickup-order';

@IonicPage()
@Component({
  selector: 'page-pick-ups-overview',
  templateUrl: 'pick-ups-overview.html',
})
export class PickUpsOverviewPage {
  public pickups;
  public code;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
    this.pickups = this.ordersProvider.getOrdersByStatus('pickup');
  }

  ionViewWillEnter(){
    this.code = '';
  }

  verifyCode(code){
    this.navCtrl.push(PickupOrderPage, {code: code});
  }

}
