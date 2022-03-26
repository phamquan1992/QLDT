import { Action, createReducer, createSelector, on } from "@ngrx/store";
import * as AuthenAction from "src/app/states/actions/authen.action";
import { AppState } from "../app.state";

export interface AuthenState {
    result: boolean,
    loadding: boolean;
}
export const initalState = {
    result: false,
    loadding: false
}
export const _AuthenReducer = createReducer(
    initalState,
    on(AuthenAction.FECTH_LOGIN, state => (
        {
            ...state,
            loadding: true
        }
    )),
    on(AuthenAction.FECTH_LOGIN_SUCCESS, (state, { result }) => (
        {
            ...state,
            loadding: false,
            result: result
        }
    )),
    on(AuthenAction.FECTH_LOGIN_FAIL, state => (
        {
            ...state,
            loadding: false
        }
    ))
)
export function AuthenReducer(state: AuthenState | undefined, action: Action) {
    return _AuthenReducer(state, action)
}
const getAuthenFeatureState = (state: AppState) => state.au_then;
export const getLoginResult = createSelector(
    getAuthenFeatureState,
    (state: AuthenState) => state.result
)