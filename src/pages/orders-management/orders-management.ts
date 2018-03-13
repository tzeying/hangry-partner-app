import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPages } from '../../shared/tabs.enum';
import { OrdersProvider } from '../../providers/orders';

@IonicPage()
@Component({
  selector: 'page-orders-management',
  templateUrl: 'orders-management.html',
})
export class OrdersManagementPage {

  public queued;
  public preparing;
  
  public categories = [
    { tabId: TabPages.Pending, displayName: "To Accept", count: 0 },
    { tabId: TabPages.Pickup, displayName: "Pick-up", count: 0 },
  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersProvider: OrdersProvider) {
  }
  
  ionViewDidEnter(){
    this.queued = this.ordersProvider.getOrdersByStatus('queued');
    this.preparing = this.ordersProvider.getOrdersByStatus('preparing');
    this.categories[0].count = this.ordersProvider.getOrdersByStatus('pending').length;
    this.categories[1].count = this.ordersProvider.getOrdersByStatus('pickup').length;
  }
  
  public selectCategory(tabId){ 
    this.navCtrl.parent.select(tabId);
  }

}
