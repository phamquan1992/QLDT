import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromDVQL from 'src/app/states/reducers/dmdvql.reducer';
import * as fromHuyen from 'src/app/states/reducers/dmhuyen.reducer';
import { DmdvqlEffect } from './states/effects/dmdvql.effect';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DmhuyenEffect } from './states/effects/dmhuyen.effect';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ dm_dvql: fromDVQL.dvqlReducer, dm_huyen: fromHuyen.huyenReducer }),
    EffectsModule.forRoot([DmdvqlEffect, DmhuyenEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
