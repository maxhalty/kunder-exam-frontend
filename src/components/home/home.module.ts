import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    IonicPageModule.forChild(HomeComponent)
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeComponentModule {
 
}