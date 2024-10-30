import React from 'react';
import '../Product/Product.css'

const ReviewItem = (props) => {
    const {name,price,quantity,key}=props.product
    const {handleRemove}=props
    return (
        <div className='product'>
          <div >
          <h2 className='product-name'>{name}</h2>
            <p>price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button onClick={()=>handleRemove(key)} className='btn-regular'>Remove</button>
          </div>
        </div>
    );
};

export default ReviewItem;