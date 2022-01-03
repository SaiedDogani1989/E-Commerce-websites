import { SET_CLOTH_PRODUCTS } from "./actionType"
import clothCards from "../../components/Clothes/cardInfo"

const clothProduct = clothCards

export const getClothCard = () => {
    return {
        type: SET_CLOTH_PRODUCTS,
        payload: clothProduct
    }
}