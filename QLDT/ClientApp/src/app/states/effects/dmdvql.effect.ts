import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FECTH_DMDVQL, FECTH_DM_DVQL_FAILURE, FECTH_DM_DVQL_SUCCESS, GET_OBJ_DMDVQL, GET_OBJ_DMDVQL_FAILURE, GET_OBJ_DMDVQL_SUCCESS } from "../actions/dmdvql.action";

@Injectable()
export class DmdvqlEffect {
    constructor(private action$: Actions, private dataSrv: DataService) {

    }
    loadDmdvql$ = createEffect(() => this.action$.pipe(
        ofType(FECTH_DMDVQL),
        switchMap(() => this.dataSrv.get('dmdvql').pipe(
            map((dm_dvqls: any) => FECTH_DM_DVQL_SUCCESS({ dm_dvqls })),
            catchError(error => of(FECTH_DM_DVQL_FAILURE()))
        ))
    ))
    getObjDVQL$ = createEffect(() => this.action$.pipe(
        ofType(GET_OBJ_DMDVQL),
        mergeMap(({ url }) => this.dataSrv.getbykey(url).pipe(
            map((obj_dm: any) => GET_OBJ_DMDVQL_SUCCESS({ obj_dm })),
            tap(),
            catchError(error =>
                of(GET_OBJ_DMDVQL_FAILURE())
            )
        ))
    ))
}