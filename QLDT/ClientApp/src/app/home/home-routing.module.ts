import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmbaocaoComponent } from './dmbaocao/dmbaocao.component';
import { DmbcheaderComponent } from './dmbcheader/dmbcheader.component';
import { DmchitieuComponent } from './dmchitieu/dmchitieu.component';
import { DmdvqlComponent } from './dmdvql/dmdvql.component';
import { DmhopdongtcComponent } from './dmhopdongtc/dmhopdongtc.component';
import { DmhuyenComponent } from './dmhuyen/dmhuyen.component';
import { HomeComponent } from './home.component';
import { ModalCTComponent } from './modal-ct/modal-ct.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'dm-dvql', component: DmdvqlComponent },
      { path: 'dm-huyen', component: DmhuyenComponent },
      { path: 'bao-cao', component: DmbaocaoComponent },
      { path: 'header', component:  DmbcheaderComponent},
      { path: 'chi-tieu', component: DmchitieuComponent },
      { path: 'hop-dong', component: DmhopdongtcComponent },
      { path: 'mo-dal', component: ModalCTComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
