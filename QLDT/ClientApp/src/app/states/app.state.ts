import { DmdvqlState } from "./reducers/dmdvql.reducer";
import { DmhuyenState } from "./reducers/dmhuyen.reducer";

export interface AppState{
    dm_dvql:DmdvqlState,
    dm_huyen:DmhuyenState
}