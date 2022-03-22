import { createAction, props } from "@ngrx/store";
import { dm_baocao } from "src/app/models/dm_baocao";

export enum dmbaocaoActionType {
    Fecth_dmbaocao = "[DMBAOCAO] Fectch dmbaocao",
    Fecth_dmbaocao_success = "[DMBAOCAO] Fecth dmbaocao success",
    Fecth_dmbaocao_failure = "[DMBAOCAO] Fecth dmbaocao failure",
    Get_obj_dmbaocao = "[DMBAOCAO] Get dmbaocao",
    Get_obj_dmbaocao_success = "[DMBAOCAO] Get dmbaocao success",
    Get_obj_dmbaocao_failure = "[DMBAOCAO] Get dmbaocao failure",
    Post_dmbaocao = "[DMBAOCAO] Post dmbaocao",
    Post_dmbaocao_success = "[DMBAOCAO] Post dmbaocao success",
    Post_dmbaocao_failure = "[DMBAOCAO] Post dmbaocao failure",
    Put_dmbaocao = "[DMBAOCAO] Put dmbaocao",
    Put_dmbaocao_success = "[DMBAOCAO] Put dmbaocao success",
    Put_dmbaocao_failure = "[DMBAOCAO] Put dmbaocao failure",
    Delete_dmbaocao = "[DMBAOCAO] Delete dmbaocao",
    Delete_dmbaocao_success = "[DMBAOCAO] Delete dmbaocao success",
    Delete_dmbaocao_failure = "[DMBAOCAO] Delete dmbaocao failure"
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
export const POST_DMBAOCAO = createAction(
    dmbaocaoActionType.Post_dmbaocao,
    props<{ obj_dmbaocao_add: dm_baocao }>()
)
export const POST_DMBAOCAO_SUCCESS = createAction(
    dmbaocaoActionType.Post_dmbaocao_success,
    props<{ result: string }>()
)
export const POST_DMBAOCAO_FAILURE = createAction(
    dmbaocaoActionType.Post_dmbaocao_failure
)
export const PUT_DMBAOCAO = createAction(
    dmbaocaoActionType.Put_dmbaocao,
    props<{ obj_dmbaocao_update: dm_baocao }>()
)
export const PUT_DMBAOCAO_SUCCESS = createAction(
    dmbaocaoActionType.Put_dmbaocao_success,
    props<{ result_update: string }>()
)
export const PUT_DMBAOCAO_FAILURE = createAction(
    dmbaocaoActionType.Put_dmbaocao_failure
)
export const DELETE_DMBAOCAO = createAction(
    dmbaocaoActionType.Delete_dmbaocao,
    props<{ id: string }>()
)
export const DELETE_DMBAOCAO_SUCCESS = createAction(
    dmbaocaoActionType.Delete_dmbaocao_success,
    props<{ result_del: string }>()
)
export const DELETE_DMBAOCAO_FAILURE = createAction(
    dmbaocaoActionType.Delete_dmbaocao_failure
)
