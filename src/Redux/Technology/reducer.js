import { SET_TECH_PRODUCTS } from "./actionType"

const initialState = {
    techProducts: []
}

const techReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TECH_PRODUCTS:
            return {
                ...state,
                techProducts: action.payload
            }
        default:
            return state
    }
}

export default techReducer;