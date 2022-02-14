import React, { useState, useRef, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const ButtonPayPal = () => {
    return (
    <div>
        <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <PayPalScriptProvider 
                    options = {{
                        "client-id" : `Ad1JD3pkg19HMQOmqR2BHQ8XvD1neywAiB-LAW4wJXWN_VxCVys0pMoac3RlkGz0M3EGHW2kfDOsdVSk`,
                    }}
                >
                    <PayPalButtons 
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units:[
                                    {
                                        amount: { 
                                            value: 13.99,
                                        },
                                    },
                                ],
                            })
                        }}
                        onApprove={ async(data,actions) =>{
                            const order = await actions.order.capture();
                            console.log(order);
                            modalPurchaseSuccess();
                        }}
                    />
                </PayPalScriptProvider>
                </div>
    </div>
    )
}
export default ButtonPayPal