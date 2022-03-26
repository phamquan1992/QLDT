import { createAction, props } from "@ngrx/store";

export enum authenActionType {
    Login_fecth = "[Authen] Login fecth",
    Login_fecth_success = "[Authen] Login success",
    Login_fecth_fail = "[Authen] Login fail",
}
export const FECTH_LOGIN = createAction(
    authenActionType.Login_fecth,
    props<{ user_name: string, pass_word: string }>()
)
export const FECTH_LOGIN_SUCCESS = createAction(
    authenActionType.Login_fecth_success,
    props<{ result: boolean }>()
)
export const FECTH_LOGIN_FAIL = createAction(
    authenActionType.Login_fecth_fail
)