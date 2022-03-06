import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmdvqlComponent } from './dmdvql/dmdvql.component';
import { DmhuyenComponent } from './dmhuyen/dmhuyen.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'dm-dvql', component: DmdvqlComponent },
      { path: 'dm-huyen', component: DmhuyenComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
