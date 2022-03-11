import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DmdvqlComponent } from './dmdvql/dmdvql.component';
import { HomeComponent } from './home.component';
import { DmhuyenComponent } from './dmhuyen/dmhuyen.component';
import { DmbaocaoComponent } from './dmbaocao/dmbaocao.component';
import { DmbcheaderComponent } from './dmbcheader/dmbcheader.component';
import { DmchitieuComponent } from './dmchitieu/dmchitieu.component';
import { DmhopdongtcComponent } from './dmhopdongtc/dmhopdongtc.component';
import { ModalCTComponent } from './modal-ct/modal-ct.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DmdvqlComponent,
    DmhuyenComponent,
    DmbaocaoComponent,
    DmbcheaderComponent,
    DmchitieuComponent,
    DmhopdongtcComponent,
    ModalCTComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
