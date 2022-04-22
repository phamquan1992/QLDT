import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { DELETE_NHOMCHUCNANG, DELETE_NHOMCHUCNANG_FAILURE, DELETE_NHOMCHUCNANG_SUCCESS, GETALL_NHOMCHUCNANG, GETALL_NHOMCHUCNANG_FAILURE, GETALL_NHOMCHUCNANG_SUCCESS, GET_OBJ_NHOMCHUCNANG, GET_OBJ_NHOMCHUCNANG_FAILURE, GET_OBJ_NHOMCHUCNANG_SUCCESS, POST_NHOMCHUCNANG, POST_NHOMCHUCNANG_FAILURE, POST_NHOMCHUCNANG_SUCCESS, PUT_NHOMCHUCNANG, PUT_NHOMCHUCNANG_FAILURE, PUT_NHOMCHUCNANG_SUCCESS } from "../actions/nhomchucnang.action";

@Injectable()
export class Nhomchucnangeffect {
    constructor(private action$: Actions, private dataSrv: DataService) { }
    getAllNhomChucNang$=createEffect(()=>this.action$.pipe(
        ofType(GETALL_NHOMCHUCNANG),
        switchMap(()=>this.dataSrv.get('nhomchucnang').pipe(
            map((nhomchucnangs: any) => GETALL_NHOMCHUCNANG_SUCCESS({ nhomchucnangs })),
            catchError(error => of(GETALL_NHOMCHUCNANG_FAILURE()))
        ))
    ))
    getNhomChucNang$=createEffect(()=>this.action$.pipe(
        ofType(GET_OBJ_NHOMCHUCNANG),
        switchMap(()=>this.dataSrv.get('nhomchucnang').pipe(
            map((nhomchucnang_obj: any) => GET_OBJ_NHOMCHUCNANG_SUCCESS({ nhomchucnang_obj })),
            catchError(error => of(GET_OBJ_NHOMCHUCNANG_FAILURE()))
        ))
    ))
    postnhomchucnang$ = createEffect(() => this.action$.pipe(
        ofType(POST_NHOMCHUCNANG),
        mergeMap(({ nhomchucnang_add }) =>
            this.dataSrv.post('nhomchucnang/Create', nhomchucnang_add).pipe(
                map((result: any) => POST_NHOMCHUCNANG_SUCCESS({ result })),
                tap(),
                catchError(error =>
                    of(POST_NHOMCHUCNANG_FAILURE())
                )
            ))
    ))
    putnhomchucnang$ = createEffect(() => this.action$.pipe(
        ofType(PUT_NHOMCHUCNANG),
        mergeMap(({ nhomchucnang_update }) =>
            this.dataSrv.put('nhomchucnang/Update', nhomchucnang_update).pipe(
                map((result: any) => PUT_NHOMCHUCNANG_SUCCESS({ result })),
                tap(),
                catchError(error =>
                    of(PUT_NHOMCHUCNANG_FAILURE())
                )
            ))
    ))
    deletenhomchucnang$ = createEffect(() => this.action$.pipe(
        ofType(DELETE_NHOMCHUCNANG),
        mergeMap(({ id }) => this.dataSrv.delete('nhomchucnang/Delete', id).pipe(
            map((result: any) => DELETE_NHOMCHUCNANG_SUCCESS({ result })),
            tap(),
            catchError(error =>
                of(DELETE_NHOMCHUCNANG_FAILURE())
            )
        ))
    ))
}