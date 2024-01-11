import { useSelector } from "react-redux"
import ItemList from "./itemList"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text=2xl font-bold"> Cart </h1>
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;