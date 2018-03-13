import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptOrderPage } from './accept-order';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AcceptOrderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AcceptOrderPage),
  ],
  entryComponents: [
    AcceptOrderPage
  ]
})
export class AcceptOrderPageModule {}
