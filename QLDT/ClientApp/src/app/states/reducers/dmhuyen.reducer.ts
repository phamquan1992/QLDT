import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { dm_huyen } from "src/app/models/dm_huyen";
import * as DmHuyenAction from "src/app/states/actions/dmhuyen.action"
import { AppState } from "../app.state";

export interface DmhuyenState {
    list: dm_huyen[];
    loadding: boolean;
    obj_dmhuyen: dm_huyen;
}
export const initalState = {
    list: [] as dm_huyen[],
    loadding: false,
    obj_dmhuyen: null as unknown as dm_huyen
}
export const DmhuyenReducer = createReducer(
    initalState,
    on(DmHuyenAction.FECTH_DMHUYEN, state => (
        {
            ...state, loadding: true
        }
    )),
    on(DmHuyenAction.FECTH_DMHUYEN_SUCCESS, (state, { dmhuyens }) => (
        {
            ...state,
            loadding: false,
            list: dmhuyens
        }
    )),
    on(DmHuyenAction.FECTH_DMHUYEN_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    )),
    on(DmHuyenAction.GET_OBJ_DMHUYEN, state => (
        {
            ...state, loadding: true
        }
    )),
    on(DmHuyenAction.GET_OBJ_DMHUYEN_SUCCESS, (state, { obj_huyen }) => (
        {
            ...state,
            loadding: false,
            obj_dmhuyen: obj_huyen
        }
    )),
    on(DmHuyenAction.GET_OBJ_DMHUYEN_FAILURE, state => (
        {
            ...state, loadding: false
        }
    ))
);
export function huyenReducer(state: DmhuyenState | undefined, action: Action) {
    return DmhuyenReducer(state, action)
}
const getHuyenfeatureState = (state: AppState) => state.dm_huyen;
export const getDMHUYENs = createSelector(
    getHuyenfeatureState,
    (state: DmhuyenState) => state.list
)
export const getOBJdmhuyen = createSelector(
    getHuyenfeatureState,
    (state: DmhuyenState) => state.obj_dmhuyen
)
