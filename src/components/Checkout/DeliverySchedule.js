import React from 'react';

const DeliverySchedule = ({register,errors}) => {

    let dayjs = require('dayjs')
    let hour = dayjs().format('H')

    const disabledBackground = {
        background: 'lightgrey'
    }
    const disabledFont ={
        color: 'white'
    }
    
    return (
        <div className="schedule checkout-section">
            <h3 className="section-header">Delivery Schedule</h3>
            
            <div className="radio-group row" {...register("deliverySchedule", { required:true })} id="deliverySchedule" name="deliverySchedule">
                <label className="col-md-4">
                    <input type="radio" disabled={hour>19 || hour < 7?true:false} name="deliverySchedule" className="card-input-element" value="90 min express delivery"/>
                    <div className="panel panel-default card-input" style={hour>19 || hour < 7?disabledBackground:{}}>
                        <div className="panel-heading" style={hour>19 || hour < 7?disabledFont:{}}>Express-Delivery</div>
                        <div className="panel-body" style={hour>19 || hour < 7?disabledFont:{}}>
                        90 min express delivery
                        </div>
                    </div>
                </label>
                <label className="col-md-4">
                    <input type="radio" disabled={hour>8?true:false} name="deliverySchedule" className="card-input-element" value="8am-11am"/>
                    <div className="panel panel-default card-input" style={hour>8?disabledBackground:{}}>
                        <div className="panel-heading" style={hour>8?disabledFont:{}}>8am-11am</div>
                        <div className="panel-body" style={hour>8?disabledFont:{}}>
                        8.00 AM - 11.00 AM
                        </div>
                    </div>
                </label>
                <label className="col-md-4">
                    <input type="radio" disabled={hour>11?true:false} name="deliverySchedule" className="card-input-element" value="11am-2pm"/>
                    <div className="panel panel-default card-input" style={hour>11?disabledBackground:{}}>
                        <div className="panel-heading" style={hour>11?disabledFont:{}}>11am-2pm</div>
                        <div className="panel-body" style={hour>11?disabledFont:{}}>
                        11.00 AM - 2.00 PM
                        </div>
                    </div>
                </label>
                <label className="col-md-4">
                    <input type="radio" disabled={hour>14?true:false} name="deliverySchedule" className="card-input-element" value="2pm-5pm"/>
                    <div className="panel panel-default card-input" style={hour>14?disabledBackground:{}}>
                        <div className="panel-heading" style={hour>14?disabledFont:{}}>2pm-5pm</div>
                        <div className="panel-body" style={hour>14?disabledFont:{}}>
                        2.00 PM - 5.00 PM
                        </div>
                    </div>
                </label>
                <label className="col-md-4" >
                    <input type="radio" disabled={hour>17?true:false} name="deliverySchedule" className="card-input-element" value="5pm-8pm"/>
                    <div className="panel panel-default card-input" style={hour>17?disabledBackground:{}}>
                        <div className="panel-heading" style={hour>17?disabledFont:{}}>5pm-8pm</div>
                        <div className="panel-body" style={hour>17?disabledFont:{}}>
                        5.00 PM - 8.00 PM
                        </div>
                    </div>
                </label>
                <label className="col-md-4">
                    <input type="radio" name="deliverySchedule" className="card-input-element" value="Next day"/>
                    <div className="panel panel-default card-input">
                        <div className="panel-heading">Next Day</div>
                        <div className="panel-body">
                        Next Day
                        </div>
                    </div>
                </label>
            </div>
            {errors.deliverySchedule?.type === 'required' && <span className="text-danger">Delivery schedule is required</span>}
        </div>
    );
};

export default DeliverySchedule;