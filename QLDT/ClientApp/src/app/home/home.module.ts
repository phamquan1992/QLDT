import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DmdvqlComponent } from './dmdvql/dmdvql.component';
import { HomeComponent } from './home.component';
import { DmhuyenComponent } from './dmhuyen/dmhuyen.component';


@NgModule({
  declarations: [
    HomeComponent,
    DmdvqlComponent,
    DmhuyenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
