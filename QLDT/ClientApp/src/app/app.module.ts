import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import * as fromDVQL from 'src/app/states/reducers/dmdvql.reducer';
import * as fromHuyen from 'src/app/states/reducers/dmhuyen.reducer';
import * as fromBaocao from 'src/app/states/reducers/dmbaocao.reducer';
import { DmdvqlEffect } from './states/effects/dmdvql.effect';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DmhuyenEffect } from './states/effects/dmhuyen.effect';
import { Dmbaocaoeffect } from './states/effects/dmbaocao.effect';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ dm_dvql: fromDVQL.dvqlReducer, dm_huyen: fromHuyen.huyenReducer, dm_baocao: fromBaocao.baocaoReducer }),
    EffectsModule.forRoot([DmdvqlEffect, DmhuyenEffect, Dmbaocaoeffect]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
