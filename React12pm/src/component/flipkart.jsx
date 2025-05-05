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
        <div class="product-container">
        <div class="product-image">
            <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg?v=1711262453'></img>
        </div>
        <div class="product-details">
            <div class="product-title">
                <a href="">
                    boAt Airdopes 161/163 with ASAP Charge & 40 HRS Playback Bluetooth
                </a>
            </div>
            <div class="product-variant">Cool Sapphire, True Wireless</div>
            <div class="seller-info">
                Seller: PRO-STACK-DEALER PVT LTD.
            </div>
            <div class="price-section">
                <span class="current-price">₹1,000</span>
                <span class="original-price">₹2,490</span>
                <span class="discount">63% Off</span>
            </div>
           
           
            <div class="delivery-info">
                Delivery by Fri May 9 | <span class="free">Free</span> <span class="original-delivery-cost">₹40</span>
            </div>
           <div class="total-price">
             Total Amount Price: <span >{1000*count}</span>
           </div>
            <div class="quantity-actions">
                <button onClick={decHandler}>–</button>
                <div>
                <input type="text" value={count}></input>
                </div>
                <button onClick={incHandler}>+</button>
            </div>
            <div class="save-remove">
                <div>Save for later</div>
                <div>Remove</div>
            </div>
        </div>
    </div>
    )
}
export default Flipkart;
