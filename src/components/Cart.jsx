import { useContext, useState, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import Icon from '@mdi/react';
import { mdiDeleteOutline, mdiMinus, mdiPlus } from '@mdi/js';
import Nav from "./Nav";
import '../styles/cart.css'

export default function Cart() {
  const { clicked, removeFromCart, updateQuantity } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    //total amount
    const total = clicked.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    //round off
    const roundTotal = Math.round((total + Number.EPSILON) * 100) / 100;
    setTotalAmount(roundTotal);
  }, [clicked]);


  function handleIncrease(itemId) {
    updateQuantity(itemId, 1);
  }

  function handleDecrease(itemId) {
    updateQuantity(itemId, -1);
  }

  function ordered() {
    alert(`Total Amount: $${totalAmount} \nCheckout successful!🎉`)
  }


  return (
    <div className="cartPage">
      <nav>
        <Nav />
      </nav>
      <main className="cartContent">
        <ul className="addedList">
          {clicked.map((c)=> (
            <li key={c.id} className="addedItem">
              <img src={c.image_path} alt={`Image of ${c.name}`} className="addedItemPic" title={`${c.name}`} /> 

              <div className="addedItemInfo">
                <p>{c.name}</p>
                <p>Price: ${c.price * c.quantity}</p><br />
                <div className="displayCount">
                  <button className="decreaseBtn" onClick={() => {handleDecrease(c.id)}} >
                    <Icon path={mdiMinus} size={0.5} />
                  </button>
                  <div className="currentCount">{c.quantity}</div>
                  <button className="increaseBtn" onClick={() => {handleIncrease(c.id)}} >
                    <Icon path={mdiPlus} size={0.5} />
                  </button>
                </div>
              </div>

              <button className='removeFromCartBtn' onClick={() => {removeFromCart(c.id)}} >
                <Icon path={mdiDeleteOutline} size={1} color='black' className='deleteIcon' title='Delete' />
              </button>
            </li>
          ))}
        </ul>

        <section className="checkoutSec">
            {clicked.length > 0 ? (
              <div className="checkoutContent">
                <hr />
                <h3 className="totalDisplay">Total amount: ${totalAmount}</h3>
                <div className="checkoutBtnDiv">
                  <button className="checkoutBtn" onClick={() => {ordered()}}>Checkout</button>
                </div>
              </div>
            ) : (
              <h1 className="emptyCart">Empty cart</h1>
            )}
        </section>
      </main>
    </div>
  )
}
