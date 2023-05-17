import React from "react";

const CartItem = (props) => {
  const { title, price, qty } = props.product;
  const { product, onIncressQuantity, onDecressQuantity, onDeleteQuantity } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontStyle: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs: {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>

        <div className="cart-item-action">
          {/* buttons  */}
          <img
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="incress"
            onClick={() => {
              onIncressQuantity(product);
            }}
          />
          <img
            className="action-icons"
            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            alt="decress"
            onClick={() => {
              onDecressQuantity(product);
            }}
          />
          <img
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete"
            onClick={() => {
              onDeleteQuantity(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: 110,
    height: 110,
    boderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
