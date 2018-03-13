import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreparingOrderPage } from './preparing-order';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PreparingOrderPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PreparingOrderPage),
  ],
  entryComponents: [
    PreparingOrderPage
  ]
})
export class PreparingOrderPageModule {}
