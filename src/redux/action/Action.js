import {UPDATE_CART} from '../action-type'
import { createAction } from '@reduxjs/toolkit'


export const updateMyCart = createAction(UPDATE_CART);

// export const updateMyCart = (num) => {
// return {
//     type: UPDATE_CART, payload:num
// }
// }

