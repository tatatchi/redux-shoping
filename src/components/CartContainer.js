import React from "react";
import { useSelector, useDispatch } from "react-redux";
import shopItems from "../shopItems";
import CartItem from "./CartItem"
import { clearCart } from "../features/cart/CartSlice";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, shopItems, total }  = useSelector((state) => state.cart);
    if(amount < 1) {
        return (
            <seciton className="cart">
                <header>
                    <h2>買い物かご</h2>
                    <h4 className="empty-cart">何も入ってません</h4>
                </header>
            </seciton>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
                {shopItems.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        合計 <span>{total}円</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(openModal())}>全削除</button>
            </footer>
        </section>
    );
};

export default CartContainer;