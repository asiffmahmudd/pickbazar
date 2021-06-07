import React, { useState } from 'react';

const CartVoucher = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="cart-voucher text-center mb-3">
            {
                show &&
                <div className="voucher-input-container">
                    <form>
                        <div class="form-group">
                            <input type="text" className="form-control shadow-sm" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                        </div>
                        <button type="submit" class="btn">Apply</button>
                    </form>
                </div>
            }      
            {
                !show &&
                <div className="text-center theme-text hover-pointer font-weight-bold" onClick={() => setShow(true)}>
                    Do you have a voucher?
                </div>
            }           
        </div>
    );
};

export default CartVoucher;