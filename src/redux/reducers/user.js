import * as types from "../constants/constants"

const initialState = {
    name: localStorage.getItem("name") ? localStorage.getItem("name") :null,
    gender: localStorage.getItem("gender") ? localStorage.getItem("gender") :null,

}

const userReducer = (state = initialState, action )=>{
    switch(action.type){
        case types.CHANGE_USER_INFO:
            localStorage.setItem("name",action.name);
            localStorage.setItem("gender",action.gender)
            return {
                name : action.name,
                gender: action.gender
            }


        default :
        return state
    }
}

export default userReducer