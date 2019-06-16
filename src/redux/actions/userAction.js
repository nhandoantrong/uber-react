import * as types from "../constants/constants";

export const changeUserInfo =(name, gender) =>({
    type: types.CHANGE_USER_INFO,
    name,
    gender
})