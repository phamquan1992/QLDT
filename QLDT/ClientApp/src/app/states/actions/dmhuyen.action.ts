import { createAction, props } from "@ngrx/store";
import { dm_huyen } from "src/app/models/dm_huyen";

export enum dmhuyenActionType {
    Fecth_dmhuyen = "[DMHUYEN] Call list dmhuyen",
    Feccth_dmhuyen_success = "[DMHUYEN] Get dmhuyen success",
    Fecth_dmhuyen_failure = "[DMHUYEN] Get dmhuyen failure",
    Get_obj_dmhuyen = "[DMHUYEN] Call obj dmhuyen",
    Get_obj_dmhuyen_success = "[DMHUYEN] Get dmhuyen success",
    Get_obj_dmhuyen_failure = "[DMHUYEN] Get dmhuyen failure"
}
export const FECTH_DMHUYEN = createAction(
    dmhuyenActionType.Fecth_dmhuyen
)
export const FECTH_DMHUYEN_SUCCESS = createAction(
    dmhuyenActionType.Feccth_dmhuyen_success,
    props<{ dmhuyens: dm_huyen[] }>()
)
export const FECTH_DMHUYEN_FAILURE = createAction(
    dmhuyenActionType.Fecth_dmhuyen_failure
)
export const GET_OBJ_DMHUYEN = createAction(
    dmhuyenActionType.Get_obj_dmhuyen,
    props<{ url: string }>()
)
export const GET_OBJ_DMHUYEN_SUCCESS = createAction(
    dmhuyenActionType.Get_obj_dmhuyen_success,
    props<{ obj_huyen: dm_huyen }>()
)
export const GET_OBJ_DMHUYEN_FAILURE = createAction(
    dmhuyenActionType.Get_obj_dmhuyen_failure
)