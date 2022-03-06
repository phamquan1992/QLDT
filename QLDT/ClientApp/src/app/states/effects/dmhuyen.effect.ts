import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FECTH_DMHUYEN, FECTH_DMHUYEN_FAILURE, FECTH_DMHUYEN_SUCCESS, GET_OBJ_DMHUYEN, GET_OBJ_DMHUYEN_FAILURE, GET_OBJ_DMHUYEN_SUCCESS } from "../actions/dmhuyen.action";

@Injectable()
export class DmhuyenEffect {
    constructor(private action$: Actions, private dataSrv: DataService) { }
    loadDmhuyen$ = createEffect(() => this.action$.pipe(
        ofType(FECTH_DMHUYEN),
        switchMap(() => this.dataSrv.get('dmhuyen').pipe(
            map((dmhuyens: any) => FECTH_DMHUYEN_SUCCESS({ dmhuyens })),
            catchError(error => of(FECTH_DMHUYEN_FAILURE()))
        ))
    ))
    loadObjHuyen$ = createEffect(() => this.action$.pipe(
        ofType(GET_OBJ_DMHUYEN),
        mergeMap(({ url }) => this.dataSrv.getbykey(url).pipe(
            map((obj_huyen: any) => GET_OBJ_DMHUYEN_SUCCESS({ obj_huyen })),
            catchError(error => of(GET_OBJ_DMHUYEN_FAILURE()))
        ))
    ))
} 