import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import OrdersCard from './OrdersCard';

export default function AllOrders() {
  const [data, setData] = useState([]);
  let token = localStorage.getItem('token');
  const userId = jwtDecode(token);
  async function getOrders(){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId.id}`);
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    getOrders();
  
  }, [])


  return <>
  <OrdersCard items={data}/>
  </>
}
