import { combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer.ts";

const rootReducer = combineReducers({
    users : usersReducer
})

export default rootReducer;