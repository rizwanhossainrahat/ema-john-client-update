import {useState,useEffect} from 'react'
import {getStoredCart} from '../../utilities/fakedb'


const useCart=()=>{
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const savedCart=getStoredCart()
        console.log(savedCart)
        const keys=Object.keys(savedCart);
        fetch('https://ema-jhon-server.vercel.app/products/bykeys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products=>{
            console.log(products)
             if(products.length){
            
            const storedCart=[]
            // saveCart ar modde for loop chaliye key nichi  in dibo object ar jonno r of dibo array ar jonno
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key)
                if(addedProduct){
                    const quantity=savedCart[key]
                    addedProduct.quantity=quantity
                    storedCart.push(addedProduct)
                }
                setCart(storedCart)
            }
            
        }
        })
       
    },[])
    
    return [cart,setCart];
}

export default useCart;