import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import "../style/products.css";
import axios from 'axios';
import Loader from './UI/Loader';

const URL = "https://react-guide-oct-2023-default-rtdb.firebaseio.com/items.json";

export default function Products({handleAddItem, handleRemoveItem,eventQueue}) {

    const [errMsg, setErrorMsg] = useState("");
  // const [items, setitems] = useState([
  //   {
  //       id:1001,
  //       title:'item 1',
  //       thumbnail:"http://localhost:3000/assets/thumbnail.jpg",
  //       price:450,
  //       discountedPrice:200
  //   },
  //   {
  //       id:1002,
  //       title:'item 2',
  //       thumbnail:'http://localhost:3000/assets/thumbnail.jpg',
  //       price:400,
  //       discountedPrice:250
  //   },
  //   {
  //     id:1003,
  //     title:'item 3',
  //     thumbnail:'http://localhost:3000/assets/thumbnail.jpg',
  //     price:800,
  //     discountedPrice:600
  //   },
  //   {
  //     id:1004,
  //     title:'item 4',
  //     thumbnail:'http://localhost:3000/assets/thumbnail.jpg',
  //     price:500,
  //     discountedPrice:450

  //   }
  // ])


  const [items, setItems] = useState();
  const [loader, setLoader] = useState(true);

  // since fetch is a promise we have to make use of async/await here or .then/catch method. res.json() is also a promise
  // useEffect( ()=>{
  //     const result = fetch(URL).then((res)=>res.json().then((data)=>{
  //       console.log(data);
  //       setItems(data);
  //     })).catch(()=>{
  //         setErrorMsg("Something Went wrong");
  //     })
  // },[])



  // axios promise

  // useEffect(()=>{
  //   const result = axios.get(URL).then((res)=>{
  //     // console.log(res.data)
  //       const resData = res.data;
        
  //       const finalData = resData.map((data,index)=>{
  //         return(
  //           {
  //             ...data,
  //             id:index
  //           }
  //         )
  //       })
  //       // console.log({finalData});
  //       setItems(finalData);
  //   }).catch(()=>{
  //     setErrorMsg("something went wrong");
  //   })
  // },[])


  // axios async


  useEffect(()=>{
  
      async function getItems(){

        try{
          const data = (await axios.get(URL)).data;
          const resultData = data.map((item,index)=>{
            return({
              ...item,
              quantity:0,
              id:index
            })
          })  
  
          setItems(resultData);

        }
        catch(err){

        }
        finally{
          setLoader(false);
        }
    
  }
getItems();
},[])


useEffect(()=>{
    if(eventQueue.id > -1){
        if(eventQueue.type === 1){
          addItemToCart(eventQueue.id);
        }
        if(eventQueue.type === -1){
          removeItemFromCart(eventQueue.id);
        }
    }
},[eventQueue])

    const addItemToCart = (id)=>{
      console.log(id);
      let data = [...items];
      let index = data.findIndex((item)=>item.id === id);
      data[index].quantity ++; 
      setItems(data);
      handleAddItem(data[index]);

    }
    const removeItemFromCart=(id)=>{
      console.log(id);
      let data = [...items];
      let index = data.findIndex((item)=>item.id === id);
      if(data[index].quantity === 0)
        return;
      data[index].quantity --; 
      setItems(data);
      handleRemoveItem(data[index]);
    }

  return (
    <>
      <div className='display-item'>
          {
            items ?
            items.map((item)=>{
              return(
                <div key={item.id}>
                  <ListItem addItemToCart={()=>addItemToCart(item.id)} removeItemFromCart = {()=>removeItemFromCart(item.id)} item={item} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
                </div>)
            })
            :errMsg
          }
          
      
      </div>
      {loader && <Loader/>}
    </>
  )
}
