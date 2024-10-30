import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders,setorders]=useState([])
    const {user}=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`https://ema-jhon-server.vercel.app/orders?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res=>{
            if(res.status===200){
                return res.json();
            }
            else if(res.status===401){
                    navigate('/login')
            }
        })
        .then(data=>setorders(data))
    },[])

    return (
        <div>
            <h1>You have placed :{orders.length} orders</h1>
            <ul>
                {
                    orders.map(order=><li>{order.name}:{order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;