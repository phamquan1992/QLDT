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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NhomchucnangComponent } from './nhomchucnang/nhomchucnang.component';
import { ChucnangComponent } from './chucnang/chucnang.component';
import { TacvuComponent } from './tacvu/tacvu.component';
import { NhomquyenComponent } from './nhomquyen/nhomquyen.component';
import { QlnguoidungComponent } from './qlnguoidung/qlnguoidung.component';


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
    NhomchucnangComponent,
    ChucnangComponent,
    TacvuComponent,
    NhomquyenComponent,
    QlnguoidungComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
