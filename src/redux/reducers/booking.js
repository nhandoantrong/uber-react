import * as types from "../constants/constants"


const initialState = {
    pickUpPlace :"",
    destination: ""
}

const bookingReducer = (state =initialState,action) =>{
    switch(action.type)
    {
        case types.CHANGE_PICKUP_PLACE:
            return {...state,
                pickUpPlace: action.address
            }

        case types.CHANGE_DESTINATION:
            return {...state,
                destination:action.address
            }    

        default:
            return state
    }
}

export default bookingReducer