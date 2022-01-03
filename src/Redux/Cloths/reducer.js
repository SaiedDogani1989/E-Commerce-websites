import { SET_CLOTH_PRODUCTS} from "./actionType"

const initialState = {
    clothProducts: []
}

const clothReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLOTH_PRODUCTS:
            return {
                ...state,
                clothProducts: action.payload
            }
        default:
            return state
    }
}

export default clothReducer;