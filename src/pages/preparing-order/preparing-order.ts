import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders'

@IonicPage()
@Component({
  selector: 'page-preparing-order',
  templateUrl: 'preparing-order.html',
})
export class PreparingOrderPage {

  public order; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
    let orderId = navParams.get('orderId');
    this.order = ordersProvider.getOrderById(orderId);
  }

}
