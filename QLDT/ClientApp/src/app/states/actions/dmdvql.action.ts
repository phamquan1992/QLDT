import { createAction, props } from "@ngrx/store";
import { dm_dvql } from "src/app/models/dm_dvql";

export enum dmdvqlActionType {
    Fecth_dmdvql = "[DMDVQL] Call dm_dvql",
    Fecth_dmdvql_success = "[DMDVQL] Get success",
    Fecth_dmdvql_failure = "[DMDVQL] Get failure",
    Get_obj_dmdvql = "[DMDVQL] Call obj dm_dvql",
    Get_obj_dm_dvql_success = "[DMDVQL] Get obj success",
    Get_obj_dm_dvql_failure = "[DMDVQL] Get obj failure"
}
export const FECTH_DMDVQL = createAction(
    dmdvqlActionType.Fecth_dmdvql
)
export const FECTH_DM_DVQL_SUCCESS = createAction(
    dmdvqlActionType.Fecth_dmdvql_success,
    props<{ dm_dvqls: dm_dvql[] }>()
)
export const FECTH_DM_DVQL_FAILURE = createAction(
    dmdvqlActionType.Fecth_dmdvql_failure
)
export const GET_OBJ_DMDVQL = createAction(
    dmdvqlActionType.Get_obj_dmdvql,
    props<{ url: string }>()
)
export const GET_OBJ_DMDVQL_SUCCESS = createAction(
    dmdvqlActionType.Get_obj_dm_dvql_success,
    props<{ obj_dm: dm_dvql }>()
)
export const GET_OBJ_DMDVQL_FAILURE = createAction(
    dmdvqlActionType.Get_obj_dm_dvql_failure
)