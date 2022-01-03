import { SET_TECH_PRODUCTS } from "./actionType"
import techCard from "../../components/02Technologi/tCard"

const techProduct = techCard

export const getTechCard = () => {
    return {
        type: SET_TECH_PRODUCTS,
        payload: techProduct
    }
}