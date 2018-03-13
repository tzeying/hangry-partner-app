import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreparingOrderPage } from '../../pages/preparing-order/preparing-order';
import { PickupOrderPage } from '../../pages/pickup-order/pickup-order';
import { QueueOrderPage } from '../../pages/queue-order/queue-order';
import { AcceptOrderPage } from '../../pages/accept-order/accept-order';

@Component({
  selector: 'order-list',
  templateUrl: 'order-list.html'
})
export class OrderListComponent {

  @Input() orders;
  @Input() listTitle = "ORDERS LIST";

  constructor(public navCtrl: NavController) {
  }

  public openOrderDetails(id, status){
    switch (status) {
      case "preparing":
        this.navCtrl.push(PreparingOrderPage, { orderId: id })
        break;
      
      case "pickup":
        this.navCtrl.push(PickupOrderPage, { orderId: id })
        break;

      case "queued":
        this.navCtrl.push(QueueOrderPage, { orderId: id })
        break;

      case "pending":
        this.navCtrl.push(AcceptOrderPage, { orderId: id })
        break;

      default:
        break;
    }
  }
}
