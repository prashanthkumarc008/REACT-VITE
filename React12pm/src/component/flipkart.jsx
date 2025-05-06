import { useState } from 'react';
import './flipkartcss.css'
let Flipkart=()=>{

    let [count,setCount]=useState(1)

            let incHandler=()=>{
                setCount(count+1)
            }

            let decHandler=()=>{
                if (count<=1){
                        setCount(1);
                }
                else
                {
                    setCount(count-1);
                }
            }

    return(
        <div className="product-container">
        <div className="product-image">
            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg?v=1711262453'></img>
        </div>
        <div className="product-details">
            <div className="product-title">
                <a href="">
                    boAt Airdopes 161/163 with ASAP Charge & 40 HRS Playback Bluetooth
                </a>
            </div>
            <div className="product-variant">Cool Sapphire, True Wireless</div>
            <div className="seller-info">
                Seller: PRO-STACK-DEALER PVT LTD.
            </div>
            <div className="price-section">
                <span className="current-price">₹1,000</span>
                <span className="original-price">₹2,490</span>
                <span className="discount">63% Off</span>
            </div>
           
           
            <div className="delivery-info">
                Delivery by Fri May 9 | <span className="free">Free</span> <span className="original-delivery-cost">₹40</span>
            </div>
           <div className="total-price">
             Total Amount Price: <span >{1000*count}</span>
           </div>
            <div className="quantity-actions">
                <button onClick={decHandler}>–</button>
                <div>
                <input type="text" value={count}></input>
                </div>
                <button onClick={incHandler}>+</button>
            </div>
            <div className="save-remove">
                <div>Save for later</div>
                <div>Remove</div>
            </div>
        </div>
    </div>
    )
}
export default Flipkart;
