import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FECTH_DMBAOCAO, FECTH_DMBAOCAO_FAILURE, FECTH_DMBAOCAO_SUCCESS, GET_OBJ_DMBAOCAO, GET_OBJ_DMBAOCAO_FAILURE, GET_OBJ_DMBAOCAO_SUCCESS, POST_DMBAOCAO, POST_DMBAOCAO_FAILURE, POST_DMBAOCAO_SUCCESS, PUT_DMBAOCAO, PUT_DMBAOCAO_FAILURE, PUT_DMBAOCAO_SUCCESS } from "../actions/dmbaocao.action";

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
    postdmbaocao$ = createEffect(() => this.action$.pipe(
        ofType(POST_DMBAOCAO),
        mergeMap(({ obj_dmbaocao_add }) =>
            this.dataSrv.post('dmbaocao/Create', obj_dmbaocao_add).pipe(
                map((result: any) => POST_DMBAOCAO_SUCCESS({ result })),
                tap(),
                catchError(error =>
                    of(POST_DMBAOCAO_FAILURE())
                )
            ))
    ))
    putdmbaocao$ = createEffect(() => this.action$.pipe(
        ofType(PUT_DMBAOCAO),
        mergeMap(({ obj_dmbaocao_update }) =>
            this.dataSrv.put('dmbaocao/Update', obj_dmbaocao_update).pipe(
                map((result_update: any) => PUT_DMBAOCAO_SUCCESS({ result_update })),
                tap(),
                catchError(error =>
                    of(PUT_DMBAOCAO_FAILURE())
                )
            ))
    ))
}