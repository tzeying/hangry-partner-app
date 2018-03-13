import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { OrdersManagementPage } from '../orders-management/orders-management';
import { AcceptOrderPage } from '../accept-order/accept-order';
import { PickUpsOverviewPage } from '../pick-ups-overview/pick-ups-overview';
import { KitchenPage } from '../kitchen/kitchen';
import { OrdersProvider } from '../../providers/orders';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('myTabs') tabRef: Tabs;
  _pendingOrdersCount: number;
  get pendingOrdersCount(){
    return this.ordersProvider.getOrdersByStatus('pending').length;
  }
  set pendingOrdersCount(count){
    this._pendingOrdersCount = count; 
  }


  ordersManagementPage: any = OrdersManagementPage;
  acceptOrderPage: any = AcceptOrderPage; 
  pickupsPage: any = PickUpsOverviewPage;
  kitchenPage: any = KitchenPage;

  constructor(public navCtrl: NavController, public ordersProvider: OrdersProvider) {}
  
}
