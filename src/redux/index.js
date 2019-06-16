import {combineReducers} from "redux"
import booking from "./reducers/booking";
import user from "./reducers/user"
const rootReducer = combineReducers({
    booking,
    user
})

export default rootReducer