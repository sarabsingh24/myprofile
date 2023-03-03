import { UPDATE_CART } from "../action-type";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(UPDATE_CART,(state, action) => {
    state.count += action.payload;
  });
});


//  const createCountReducer = (state = initialState,action) => {
//      console.log(action.payload)
//     switch (action.type) {
//     case UPDATE_CART:
//       return { count: state.count + action.payload };
//       default:
//           return state;
//     }
// };

// export default createCountReducer;