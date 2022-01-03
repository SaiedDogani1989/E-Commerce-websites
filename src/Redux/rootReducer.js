import { combineReducers } from "redux";
import productReducer from "./products/reducer"
import cartReducer from "./cart/reducer"
import techReducer from "./Technology/reducer";
import clothReducer from "./Cloths/reducer";



const rootReducer = combineReducers({
    product: productReducer,
    techReducer:techReducer,
    clothReducer: clothReducer,
    shoppingCart: cartReducer
})

export default rootReducer