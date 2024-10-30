import {useState,useEffect} from 'react'

const useProduct=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://ema-jhon-server.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])
    // return korte hobe array jehetu tai array hishabe
    return [products,setProducts];
}
export default useProduct;