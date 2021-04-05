import React from 'react';
import { Button } from 'react-bootstrap';


function Home(props)
{
    console.log('Home', props.data)
return(
    <div>
        <h1>Home Component</h1>
        <div className="cartIcon">Cart {props.data.length}</div>
        <div className="cart-wrapper item">
            <div className="-wrapper item">
                {/* <img className="myimg" src="ip.jpg" /> */}
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Proce: $1000
                </span>
            </div>
            <div className="btn-wrapper item">
                <Button onClick={()=>props.addToCartHandler({price:1000, name:'I Phone'})} variant="secondary" >Add to cart</Button>
            </div>
        </div>
    </div>
)
}
export default Home;