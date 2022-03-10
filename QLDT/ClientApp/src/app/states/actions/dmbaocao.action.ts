import { createAction, props } from "@ngrx/store";
import { dm_baocao } from "src/app/models/dm_baocao";

export enum dmbaocaoActionType {
    Fecth_dmbaocao = "[DMBAOCAO] Fectch dmbaocao",
    Fecth_dmbaocao_success = "[DMBAOCAO] Fecth dmbaocao success",
    Fecth_dmbaocao_failure = "[DMBAOCAO] Fecth dmbaocao failure",
    Get_obj_dmbaocao = "[DMBAOCAO] Get dmbaocao",
    Get_obj_dmbaocao_success = "[DMBAOCAO] Get dmbaocao success",
    Get_obj_dmbaocao_failure = "[DMBAOCAO] Get dmbaocao failure"
}
export const FECTH_DMBAOCAO = createAction(
    dmbaocaoActionType.Fecth_dmbaocao
)
export const FECTH_DMBAOCAO_SUCCESS = createAction(
    dmbaocaoActionType.Fecth_dmbaocao_success,
    props<{ dmbaocaos: dm_baocao[] }>()
)
export const FECTH_DMBAOCAO_FAILURE = createAction(
    dmbaocaoActionType.Fecth_dmbaocao_failure
)
export const GET_OBJ_DMBAOCAO = createAction(
    dmbaocaoActionType.Get_obj_dmbaocao,
    props<{ url: string }>()
)
export const GET_OBJ_DMBAOCAO_SUCCESS = createAction(
    dmbaocaoActionType.Get_obj_dmbaocao_success,
    props<{ obj_baocao: dm_baocao }>()
)
export const GET_OBJ_DMBAOCAO_FAILURE = createAction(
    dmbaocaoActionType.Get_obj_dmbaocao_failure
)