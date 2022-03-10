import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FECTH_DMBAOCAO, FECTH_DMBAOCAO_FAILURE, FECTH_DMBAOCAO_SUCCESS, GET_OBJ_DMBAOCAO, GET_OBJ_DMBAOCAO_FAILURE, GET_OBJ_DMBAOCAO_SUCCESS } from "../actions/dmbaocao.action";

@Injectable()
export class Dmbaocaoeffect {
    constructor(private action$: Actions, private dataSrv: DataService) { }
    loaddmbaocao$ = createEffect(() => this.action$.pipe(
        ofType(FECTH_DMBAOCAO),
        switchMap(() => this.dataSrv.get('dmbaocao').pipe(
            map((dmbaocaos: any) => FECTH_DMBAOCAO_SUCCESS({ dmbaocaos })),
            catchError(error => of(FECTH_DMBAOCAO_FAILURE()))
        ))
    ))
    loadobjdmbaocao$ = createEffect(() => this.action$.pipe(
        ofType(GET_OBJ_DMBAOCAO),
        mergeMap(({ url }) => this.dataSrv.getbykey(url).pipe(
            map((obj_baocao: any) => GET_OBJ_DMBAOCAO_SUCCESS({ obj_baocao })),
            tap(),
            catchError(error =>
                of(GET_OBJ_DMBAOCAO_FAILURE())
            )
        ))
    ))
}