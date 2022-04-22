import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { nhomchucnang } from "src/app/models/nhomchucnang";
import * as NhomchucnangAction from "src/app/states/actions/nhomchucnang.action";
import { AppState } from "../app.state";

export interface NhomchucnangState {
    list: nhomchucnang[],
    loadding: boolean,
    obj_nhomchucnang: nhomchucnang,
    result: string;
}
export const initalState = {
    list: [] as nhomchucnang[],
    loadding: false,
    obj_nhomchucnang: {} as nhomchucnang,
    result: ''
}
export const DmnhomchucnangReducer = createReducer(
    initalState,
    on(NhomchucnangAction.GETALL_NHOMCHUCNANG, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(NhomchucnangAction.GETALL_NHOMCHUCNANG_SUCCESS, (state, { nhomchucnangs }) => (
        {
            ...state,
            loadding: false,
            list: nhomchucnangs
        }
    )),
    on(NhomchucnangAction.GETALL_NHOMCHUCNANG_FAILURE, state => (
        {
            ...state,
            loadding: false,
            list: []
        }
    )),
    on(NhomchucnangAction.GET_OBJ_NHOMCHUCNANG, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(NhomchucnangAction.GET_OBJ_NHOMCHUCNANG_SUCCESS, (state, { nhomchucnang_obj }) => (
        {
            ...state,
            loadding: false,
            obj_nhomchucnang: nhomchucnang_obj
        }
    )),
    on(NhomchucnangAction.GET_OBJ_NHOMCHUCNANG_FAILURE, state => (
        {
            ...state,
            loadding: false,
            obj_nhomchucnang: {} as nhomchucnang
        }
    )),
)
export function nhomChucnangReducer(state: NhomchucnangState | undefined, action: Action) {
    return DmnhomchucnangReducer(state, action)
}
const getnhomchucnangfeatureState = (state: AppState) => state.nhomchucnang;
export const getListDmBaocao = createSelector(
    getnhomchucnangfeatureState,
    (state: NhomchucnangState) => state.list
)
export const getObjBaocao = createSelector(
    getnhomchucnangfeatureState,
    (state: NhomchucnangState) => state.obj_nhomchucnang
)