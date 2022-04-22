import { createAction, props } from "@ngrx/store"
import { nhomchucnang } from "src/app/models/nhomchucnang"

export enum nhomchucnangActionType {
    getAllnhomchucnang = "[NHOMCHUCNANG] GET ALL",
    getAllnhomchucnang_success = "[NHOMCHUCNANG] GET ALL SUCCESS",
    getAllnhomchucnang_failure = "[NHOMCHUCNANG] GET ALL FAILURE",
    getnhomchucnang = "[NHOMCHUCNANG] GET NHOM CHUC NANG",
    getnhomchucnang_success = "[NHOMCHUCNANG] GET NHOM CHUC NANG SUCCESS",
    getnhomchucnang_failure = "[NHOMCHUCNANG] GET NHOM CHUC NANG FAILURE",
    post_nhomchucnang="[NHOMCHUCNANG] POST NHOM CHUC NANG",
    post_nhomchucnang_success="[NHOMCHUCNANG] POST NHOM CHUC NANG SUCCESS",
    post_nhomchucnang_failure="[NHOMCHUCNANG] POST NHOM CHUC NANG FAILURE",
    put_nhomchucnang="[NHOMCHUCNANG] put NHOM CHUC NANG",
    put_nhomchucnang_success="[NHOMCHUCNANG] put NHOM CHUC NANG SUCCESS",
    put_nhomchucnang_failure="[NHOMCHUCNANG] put NHOM CHUC NANG FAILURE",
    delete_nhomchucnang="[NHOMCHUCNANG] delete NHOM CHUC NANG",
    delete_nhomchucnang_success="[NHOMCHUCNANG] delete NHOM CHUC NANG SUCCESS",
    delete_nhomchucnang_failure="[NHOMCHUCNANG] delete NHOM CHUC NANG FAILURE",
}

export const GETALL_NHOMCHUCNANG = createAction(
    nhomchucnangActionType.getAllnhomchucnang
)
export const GETALL_NHOMCHUCNANG_SUCCESS = createAction(
    nhomchucnangActionType.getAllnhomchucnang_success,
    props<{ nhomchucnangs: nhomchucnang[] }>()
)
export const GETALL_NHOMCHUCNANG_FAILURE = createAction(
    nhomchucnangActionType.getAllnhomchucnang_failure
)


export const GET_OBJ_NHOMCHUCNANG = createAction(
    nhomchucnangActionType.getnhomchucnang
)
export const GET_OBJ_NHOMCHUCNANG_SUCCESS = createAction(
    nhomchucnangActionType.getnhomchucnang_success,
    props<{ nhomchucnang_obj: nhomchucnang }>()
)
export const GET_OBJ_NHOMCHUCNANG_FAILURE = createAction(
    nhomchucnangActionType.getnhomchucnang_failure
)

export const POST_NHOMCHUCNANG = createAction(
    nhomchucnangActionType.post_nhomchucnang,
    props<{ nhomchucnang_add: nhomchucnang }>()
)
export const POST_NHOMCHUCNANG_SUCCESS = createAction(
    nhomchucnangActionType.post_nhomchucnang_success,
    props<{ result: string }>()
)
export const POST_NHOMCHUCNANG_FAILURE = createAction(
    nhomchucnangActionType.post_nhomchucnang_failure
)

export const PUT_NHOMCHUCNANG = createAction(
    nhomchucnangActionType.put_nhomchucnang,
    props<{ nhomchucnang_update: nhomchucnang }>()
)
export const PUT_NHOMCHUCNANG_SUCCESS = createAction(
    nhomchucnangActionType.put_nhomchucnang_success,
    props<{ result: string }>()
)
export const PUT_NHOMCHUCNANG_FAILURE = createAction(
    nhomchucnangActionType.put_nhomchucnang_failure
)

export const DELETE_NHOMCHUCNANG = createAction(
    nhomchucnangActionType.delete_nhomchucnang,
    props<{ id: string }>()
)
export const DELETE_NHOMCHUCNANG_SUCCESS = createAction(
    nhomchucnangActionType.delete_nhomchucnang_success,
    props<{ result: string }>()
)
export const DELETE_NHOMCHUCNANG_FAILURE = createAction(
    nhomchucnangActionType.delete_nhomchucnang_failure
)