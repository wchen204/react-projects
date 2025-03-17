

function Cart() {
    return (
        <dialog className="modal" open={true}>

            <div className="cart">

                <h2>Your Cart</h2>
                <ul>
                    <li className="cart-item"><p>Lorem ipsum dolor sit amet.</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </li>
                    <li className="cart-item"><p>Lorem ipsum dolor sit amet.</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </li>
                    <li className="cart-item"><p>Lorem ipsum dolor sit amet.</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </li>
                    <li className="cart-item"><p>Lorem ipsum dolor sit amet.</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </li>
                </ul>

                <div className="cart-total">$30.00</div>

                <form className="modal-actions" method="dialog">
                    <button className="text-button">Close</button>
                    <button className="button">Go to Checkout</button>
                </form>

            </div>
        </dialog>
    );
}

export default Cart;