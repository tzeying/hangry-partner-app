import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders';

@IonicPage()
@Component({
  selector: 'page-queue-order',
  templateUrl: 'queue-order.html',
})
export class QueueOrderPage {

  public order; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
    let orderId = navParams.get('orderId');
    this.order = ordersProvider.getOrderById(orderId);
  }



}
