import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { products } = props;
  return (
    <div id="carts">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncressQuantity={props.onIncressQuantity}
            onDecressQuantity={props.onDecressQuantity}
            onDeleteQuantity={props.onDeleteQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
