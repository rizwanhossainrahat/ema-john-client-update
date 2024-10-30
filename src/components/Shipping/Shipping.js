import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const {user}=useAuth()
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const savedCart=getStoredCart();
        data.order=savedCart;
        fetch('https://ema-jhon-server.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('order palced successfully');
                clearTheCart()
                reset();
            }
        })
        
    };

    return (
        <div>
             <form className='shippin-form' onSubmit={handleSubmit(onSubmit)}>
      
      <input placeholder='name' defaultValue={user.displayName} {...register("name")} />
      
      
      <input defaultValue={user.email} placeholder='email' {...register("email", { required: true })} />
      <input placeholder='city' defaultValue="" {...register("city")} />
      <input placeholder='address' defaultValue="" {...register("address")} />
      <input placeholder='phone' defaultValue="" {...register("phone")} />

      
      {errors.email && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;<h2>this is shipping</h2>