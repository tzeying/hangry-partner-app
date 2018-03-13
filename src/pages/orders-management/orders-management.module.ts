import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersManagementPage } from './orders-management';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OrdersManagementPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OrdersManagementPage),
  ],
  entryComponents:[
    OrdersManagementPage
  ]
})
export class OrdersManagementPageModule {}
