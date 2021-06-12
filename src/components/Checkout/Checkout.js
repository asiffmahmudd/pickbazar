import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import OrderSummary from './OrderSummary';
import PaymentSection from './PaymentSection';
import ContactSection from './ContactSection';
import AddressSection from './AddressSection';
import DeliverySchedule from './DeliverySchedule';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const items = useSelector(state => state.items.cartItems)

    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-5 mb-5 justify-content-center form-row">
                        <div className="col-lg-7 checkout-wrapper">
                            
                            <DeliverySchedule register={register} errors={errors}></DeliverySchedule>

                            <AddressSection register={register} errors={errors}></AddressSection>

                            <ContactSection register={register} errors={errors}></ContactSection>

                            <PaymentSection disable={items.length === 0} register={register} errors={errors}></PaymentSection>
                            
                        </div>


                        <OrderSummary items={items}></OrderSummary>


                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;