import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state;

  let product;
  let index;
  let updatePrice;
  let updatedQty;
  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find(
        (product) => product.ProductID === action.id
      );
      if (check) {
        toast("Ten produkt został dodany do koszyka!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        product["TotalProductPrice"] = product.ProductPrice * product.qty;
        updatedQty = totalQty + 1;
        updatePrice = totalPrice + product.ProductPrice;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatePrice,
          totalQty: updatedQty,
        };
      }
      break;
    case "LIC":
      product = action.cart;
      product.qty = product.qty;
      product.TotalProductPrice = product.qty * product.ProductPrice;
      updatedQty = totalQty;
      updatePrice = totalPrice + product.ProductPrice;
      index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatePrice,
        totalQty: product.qty,
      };
      break;
    case "INC":
      product = action.cart;
      product.qty = ++product.qty;
      product.TotalProductPrice = product.qty * product.ProductPrice;
      updatedQty = totalQty + 1;
      updatePrice = totalPrice + product.ProductPrice;
      index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatePrice,
        totalQty: updatedQty,
      };
      break;
    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        product.TotalProductPrice = product.qty * product.ProductPrice;
        updatedQty = totalQty - 1;
        updatePrice = totalPrice - product.ProductPrice;
        index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatePrice,
          totalQty: updatedQty,
        };
      } else {
        return state;
      }
      break;
    case "DELETE":
      const filtred = shoppingCart.filter(
        (product) => product.ProductID !== action.id
      );
      product = action.cart;
      updatedQty = totalQty - product.qty;
      updatePrice = totalPrice - product.qty * product.ProductPrice;
      return {
        shoppingCart: [...filtred],
        totalPrice: updatePrice,
        totalQty: updatedQty,
      };
      break;
    case "EMPTY":
      return {
        shoppingCart: [],
        totalPrice: 0,
        totalQty: 0,
      };
    default:
      return state;
  }
};
