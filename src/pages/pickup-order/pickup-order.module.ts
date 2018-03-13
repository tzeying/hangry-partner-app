import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupOrderPage } from './pickup-order';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PickupOrderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PickupOrderPage),
  ],
  entryComponents: [
    PickupOrderPage
  ]
})
export class PickupOrderPageModule {}
