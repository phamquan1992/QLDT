import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromDVQL from 'src/app/states/reducers/dmdvql.reducer';
import * as fromHuyen from 'src/app/states/reducers/dmhuyen.reducer';
import * as fromBaocao from 'src/app/states/reducers/dmbaocao.reducer';
import * as fromAuthen from 'src/app/states/reducers/authen.reducer';
import * as fromNhomChucNang from 'src/app/states/reducers/nhomchucnang.reducer';
import { DmdvqlEffect } from './states/effects/dmdvql.effect';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DmhuyenEffect } from './states/effects/dmhuyen.effect';
import { Dmbaocaoeffect } from './states/effects/dmbaocao.effect';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthenEffect } from './states/effects/authen.effect';
import { Nhomchucnangeffect } from './states/effects/nhomchucnang.effect';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      dm_dvql: fromDVQL.dvqlReducer,
      dm_huyen: fromHuyen.huyenReducer,
      dm_baocao: fromBaocao.baocaoReducer,
      au_then: fromAuthen.AuthenReducer,
      nhomchucnang: fromNhomChucNang.nhomChucnangReducer
    }),
    EffectsModule.forRoot([DmdvqlEffect, DmhuyenEffect, Dmbaocaoeffect, AuthenEffect, Nhomchucnangeffect]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
