import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import ProductDescription from '../../ProductDescription/ProductDescription';
import { PayPalButton } from "react-paypal-button-v2";
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles.js';

//Delete me
import albumArt from '../../../images/Astra_Cover_Color_Border_Higher_Qual-9220707.png';
const albumDescription = 'The new dope ass album from Trevor Clock. This album is so dope that you will never ever listen to any other album ever again. You just will not even want to waste your time just do not try.'

const StoreView = () => {
    
    const [ num, setNum ] = useState(1)
    const [ unitCost, setUnitCost ] = useState(10)
    const [ total, setTotal ] = useState(0)
    const styles = useStyles()
    const { storePage, paymentContainer, totalContainer } = styles

    useEffect(() => {
        setTotal(unitCost)
    }, [])

    return (
        <Box className={storePage} component='div'>
            <Header />
            <Box element='div' >
                <ProductDescription 
                    albumInfo={{albumArt: albumArt, albumDescription: albumDescription, costPerUnit: 10}}
                    num={num} 
                    setNum={setNum}
                    setTotal={setTotal}
                    total={total}
                    unitCost={unitCost}
                />
            </Box>
            <Box className={paymentContainer} element='div'>
                <Box className={totalContainer} element='div'>
                    <Typography element='h4'>{`Item(s) Total:`}</Typography>
                    <Typography element='h4'>{`$${total}:00`}</Typography>
                </Box>
                <PayPalButton
                    amount={total}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    //   return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //       orderID: data.orderID
                    //     })
                    //   });
            }}
                />
            </Box>
        </Box>
    )
}

export default StoreView