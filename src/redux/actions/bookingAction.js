import * as types from "../constants/constants"

export const changePickUpPlace = (address) =>({
    type: types.CHANGE_PICKUP_PLACE,
    address
})

export const changeDestination = (address) =>({
    type: types.CHANGE_DESTINATION,
    address
})