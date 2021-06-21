import React from 'react';
import img from '../../../img/strawberry.jpg'

const UserOrderDetails = () => {
    return (
        <div className="user-order-details border bg-white">
            <div className="pl-3">
                <h3 className="user-order-title">Order Details</h3>
            </div>
            <div className="row border-top border-bottom" style={{margin:'0'}}>
                <div className="col-lg-8 border-right pt-3">
                    <p className="address-title">Delivery Address</p>
                    <p className="address-details">1756 Roy Alley, GIRARDVILLE, Pennsylvania</p>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Sub Total</p>
                        <p>$200</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery</p>
                        <p>$0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery Fee</p>
                        <p>$49.7</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="total"><strong>Total</strong></p>
                        <p><strong>$249.7</strong></p>
                    </div>
                </div>

                <div className="col-lg-12">

                </div>

                <div className="col-lg-12" style={{padding:'0'}}>
                    <table className="table table-borderless">
                        <thead className="bg-light">
                            <tr>
                                <th></th>
                                <th>Items</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={img} alt="" style={{height:'50px',width:'50px',}}/></td>
                                <td>
                                    <p>Banana</p>
                                    <p style={{}}>$50</p>
                                </td>
                                <td>2</td>
                                <td>$100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UserOrderDetails;