import React, { useContext, useState } from 'react'
import classes from './Payment.module.css';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/Currency/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from "../../Utility/firebase";
import{useNavigate} from "react-router-dom";
import {Type} from "../../Utility/action.type.js"


function Payment() {
  const [{basket, user}, dispatch] = useContext(DataContext)
   const totalItem = basket?.reduce((amount, item) => {
     return item.amount + amount;
   }, 0);

    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);

   const [cardError, setCardError] = useState(null);
   const [processing, setProcessing] =useState(false)

const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate();


const handleChange = (e) => {
  // console.log(e);
  e?.error?.message? setCardError(e?.error?.message): setCardError("")
};

const handlePayment = async(e) => {
  e.preventDefault();

  try{ 
    setProcessing(true);
    // backend || functions ...>contact to the client secret
    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    // console.log(response.data);
    const clientSecret = response.data?.clientSecret;
      // client side(react side confirmation)
      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
          card: elements.getElement(CardElement),
        },
        });
        console.log(paymentIntent);
        // after the confirmation ...>order firestore db save, clear basket
        await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created,
        });
        dispatch({type: Type.EMPTY_BASKET})

        setProcessing(false)
      navigate("/orders", {state: {msg:"you have placed new order"}});
} catch (error){
    console.log(error);
    setProcessing(false);
  };
};
  return (
    <Layout>
      <div className={classes.payment_header}>
        Checkout ({totalItem}) items{" "}
      </div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>7020 Rainier Ave S</div>
            <div>seattle,WA</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review Items & Delivery</h3>
          <div>
            {basket?.map((item) => {
              return <ProductCard flex={true} product={item} key={item.id} />
            })}
          </div>
        </div>
        <hr />
        {/* {card form} */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* {error} */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* {card element} */}
                <CardElement onChange={handleChange} />
                {/* {price} */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={12} />
                        <p>Please Wait...</p>
                      </div>
                    ) : (
                      " Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment