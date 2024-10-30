
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts/useProducts'
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [setProducts]=useProducts()
    
    const [cart,setCart]=useCart()
    const navigate = useNavigate();
    
    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const handlePlaceOrder=()=>{
        navigate('/shipping')
        // setCart([]);
        // clearTheCart()
    }

    return (
        <div className='shop-container'>
           <div className='product-container'>
                {
                    cart.map(product=><ReviewItem 
                    key={product.key}
                    handleRemove={handleRemove}
                    product={product}> 
                    </ReviewItem>)
                }
           </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder } className='btn-regular'>Procced to shipping </button>
                    </Cart>
                    </div>           
        </div>
    );
};

export default OrderReview;