import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
};

const favouriteSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const existingIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        toast.info("Product already in favourite list", {
          position: "bottom-left",
          className: "toast-info"
        });
      } else {
        state.wishlistItems.push(action.payload);
        toast.success("Product added to favourite list", {
          position: "bottom-left",
          className: "toast-success"
        });
      }
      localStorage.setItem("favouriteItems", JSON.stringify(state.wishlistItems));
    },
    removeFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      toast.error("Product removed from wishlist", {
        position: "bottom-left",
        className: "toast-error"
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = favouriteSlice.actions;
export default favouriteSlice.reducer;
