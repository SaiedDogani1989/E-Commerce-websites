import { SET_PRODUCTS } from "./actionType"
import cards from "../../components/03Grocery/gCard"

const products = cards

export const getProducts = () => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}