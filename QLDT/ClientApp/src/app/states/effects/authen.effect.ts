import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { nguoidung } from "src/app/models/nguoidung";
import { DataService } from "src/app/services/data.service";
import { ObservableService } from "src/app/services/observable.service";
import { FECTH_LOGIN, FECTH_LOGIN_FAIL, FECTH_LOGIN_SUCCESS } from "../actions/authen.action";

@Injectable()
export class AuthenEffect {
    constructor(private action$: Actions, private dataSrv: DataService, private _sharingService: ObservableService, private router: Router, private toastr: ToastrService) { }
    loginAcount$ = createEffect(() => this.action$.pipe(
        ofType(FECTH_LOGIN),
        mergeMap(({ user_name, pass_word }) => this.dataSrv.get('Authentications/Login?user=' + user_name + '&&pass=' + pass_word).pipe(
            map((result: any) => FECTH_LOGIN_SUCCESS({ result })),
            tap((nguodungInfo) => {
                let loginInfo: nguoidung = {
                    ten: nguodungInfo.result.ten,
                    tendangnhap: nguodungInfo.result.tendangnhap
                };
                if (loginInfo.tendangnhap != null) {
                    this._sharingService.setUserValue(loginInfo);
                    this.router.navigate(['/s']);
                } else
                    this.toastr.error("Tên đăng nhập hoặc mật khẩu không đúng!", "Cảnh báo");
            }),
            catchError(error =>
                of(FECTH_LOGIN_FAIL())
            )
        ))
    ));
}