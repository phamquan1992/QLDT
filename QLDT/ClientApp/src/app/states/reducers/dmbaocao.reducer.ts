import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { dm_baocao } from "src/app/models/dm_baocao";
import * as DmbaocaoAction from "src/app/states/actions/dmbaocao.action"
import { AppState } from "../app.state";

export interface DmbaocaoState {
    list: dm_baocao[],
    loadding: boolean,
    obj_baocao: dm_baocao,
    result: string;
}
export const initalState = {
    list: [] as dm_baocao[],
    loadding: false,
    obj_baocao: null as unknown as dm_baocao,
    result: ''
}
export const DmbaocaoReducer = createReducer(
    initalState,
    on(DmbaocaoAction.FECTH_DMBAOCAO, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(DmbaocaoAction.FECTH_DMBAOCAO_SUCCESS, (state, { dmbaocaos }) => (
        {
            ...state,
            loadding: false,
            list: dmbaocaos
        }
    )),
    on(DmbaocaoAction.FECTH_DMBAOCAO_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    )),
    on(DmbaocaoAction.GET_OBJ_DMBAOCAO, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(DmbaocaoAction.GET_OBJ_DMBAOCAO_SUCCESS, (state, { obj_baocao }) => (
        {
            ...state,
            loadding: false,
            obj_baocao: obj_baocao
        }
    )),
    on(DmbaocaoAction.GET_OBJ_DMBAOCAO_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    )),
    on(DmbaocaoAction.POST_DMBAOCAO, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(DmbaocaoAction.POST_DMBAOCAO_SUCCESS, (state, { result }) => (
        {
            ...state,
            loadding: false,
            result: result
        }
    )),
    on(DmbaocaoAction.POST_DMBAOCAO_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    )),
    on(DmbaocaoAction.PUT_DMBAOCAO, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(DmbaocaoAction.PUT_DMBAOCAO_SUCCESS, (state, { result_update }) => (
        {
            ...state,
            loadding: false,
            result: result_update
        }
    )),
    on(DmbaocaoAction.PUT_DMBAOCAO_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    )),
    on(DmbaocaoAction.DELETE_DMBAOCAO, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(DmbaocaoAction.DELETE_DMBAOCAO_SUCCESS, (state, { result_del }) => (
        {
            ...state,
            loadding: false,
            result: result_del
        }
    )),
    on(DmbaocaoAction.DELETE_DMBAOCAO_FAILURE, state => (
        {
            ...state,
            loadding: false
        }
    ))
)
export function baocaoReducer(state: DmbaocaoState | undefined, action: Action) {
    return DmbaocaoReducer(state, action)
}
const getbaocaofeatureState = (state: AppState) => state.dm_baocao;
export const getListDmBaocao = createSelector(
    getbaocaofeatureState,
    (state: DmbaocaoState) => state.list
)
export const getObjBaocao = createSelector(
    getbaocaofeatureState,
    (state: DmbaocaoState) => state.obj_baocao
)
export const postDmbaocaoresult = createSelector(
    getbaocaofeatureState,
    (state: DmbaocaoState) => state.result
)