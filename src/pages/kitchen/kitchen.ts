import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as mockOrderData from './../mock-order-data.json'; 
import { OrdersProvider } from '../../providers/orders';

@IonicPage()
@Component({
  selector: 'page-ktichen-overview',
  templateUrl: 'kitchen.html',
})
export class KitchenPage {

  public queued;
  public preparing;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
  }

  ionViewDidEnter(){
    this.queued = this.ordersProvider.getOrdersByStatus('queued');
    this.preparing = this.ordersProvider.getOrdersByStatus('preparing');
  }

}
