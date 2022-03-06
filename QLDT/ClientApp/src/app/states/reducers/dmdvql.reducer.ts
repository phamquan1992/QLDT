import { state } from "@angular/animations";
import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { dm_dvql } from "src/app/models/dm_dvql";
import * as DmdvqlAction from "../actions/dmdvql.action";
import { AppState } from "../app.state";

export interface DmdvqlState {
    list: dm_dvql[],
    loadding: boolean,
    obj_dmdvql: dm_dvql
}
export const initalState = {
    list: [] as dm_dvql[],
    loadding: false,
    obj_dmdvql: null as unknown as dm_dvql
}
export const DmdvqlReducer = createReducer(
    initalState,
    on(DmdvqlAction.FECTH_DMDVQL, state => (
        {
            ...state, loadding: true
        }
    )),
    on(DmdvqlAction.FECTH_DM_DVQL_SUCCESS, (state, { dm_dvqls }) => (
        {
            ...state,
            loadding: false,
            list: dm_dvqls
        }
    )),
    on(DmdvqlAction.FECTH_DM_DVQL_FAILURE, state => (
        {
            ...state, loadding: false
        }
    )),
    on(DmdvqlAction.GET_OBJ_DMDVQL, state => (
        {
            ...state, loadding: true
        }
    )),
    on(DmdvqlAction.GET_OBJ_DMDVQL_SUCCESS, (state, { obj_dm }) => (
        {
            ...state,
            loadding: false,
            obj_dmdvql: obj_dm
        }
    )),
    on(DmdvqlAction.GET_OBJ_DMDVQL_FAILURE, state => (
        {
            ...state, loadding: false
        }
    ))
)
export function dvqlReducer(state: DmdvqlState | undefined, action: Action) {
    return DmdvqlReducer(state, action)
}
const getDVQLfeatureState = (state: AppState) => state.dm_dvql;
export const getDMDVQLs = createSelector(
    getDVQLfeatureState,
    (state: DmdvqlState) => state.list
)
export const getOBJdmdvql = createSelector(
    getDVQLfeatureState,
    (state: DmdvqlState) => state.obj_dmdvql
)