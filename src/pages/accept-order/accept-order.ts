import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as mockOrderData from './../mock-order-data.json'; 
import { TabPages } from '../../shared/tabs.enum';
import { OrdersProvider } from '../../providers/orders';

@IonicPage()
@Component({
  selector: 'page-accept-order',
  templateUrl: 'accept-order.html',
})
export class AcceptOrderPage {
  public get pendingOrders(){
    return this.ordersProvider.getOrdersByStatus('pending');
  } 
  public isAccepted: boolean = null; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private ordersProvider: OrdersProvider) {
  }

  minimize(){
    this.navCtrl.parent.select(TabPages.Home);
  }

  acceptOrder(id) {
    let alert = this.alertCtrl.create({
      title: 'Accept Order',
      message: 'Are you sure you want to accept this order?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.isAccepted = true;
            this.ordersProvider.updateOrderStatus(id, 'queued');
            // this.pendingOrders[0].status = "queued";
          }
        }
      ]
    });
    alert.present();
  }

  rejectOrder() {
    let alert = this.alertCtrl.create({
      title: 'Reject Order',
      message: 'Are you sure you want to reject this order?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Reject',
          handler: () => {
            this.isAccepted = false;
            this.pendingOrders[0].status = "rejected";
          }
        }
      ]
    });
    alert.present();
  }

  next(){
    // this.pendingOrders.splice(0, 1);
    this.isAccepted = null;
  }
  
}
