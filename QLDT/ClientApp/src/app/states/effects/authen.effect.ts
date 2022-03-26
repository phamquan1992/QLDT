import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FECTH_LOGIN, FECTH_LOGIN_FAIL, FECTH_LOGIN_SUCCESS } from "../actions/authen.action";

@Injectable()
export class AuthenEffect {
    constructor(private action$: Actions, private dataSrv: DataService) { }
    loginAcount$ = createEffect(() => this.action$.pipe(
        ofType(FECTH_LOGIN),
        mergeMap(({ user_name, pass_word }) => this.dataSrv.get('Authentications/Login?user=' + user_name + '&&pass=' + pass_word).pipe(
            map((result: any) => FECTH_LOGIN_SUCCESS({ result })),
            tap(),
            catchError(error =>
                of(FECTH_LOGIN_FAIL())
            )
        ))
    ));
}