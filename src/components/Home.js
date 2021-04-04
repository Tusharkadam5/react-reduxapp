import React from 'react';
import { Button } from 'react-bootstrap';

function Home()
{
return(
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper item">
            <div className="-wrapper item">
                <img className="myimg" src="ip.jpg" />
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
                <Button  variant="secondary" >Add to cart</Button>
            </div>
        </div>
    </div>
)
}
export default Home;