
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Subheader from './components/Subheader';



function App() {

  const [cartItems, setCartItems] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id:'',
    type:''
  });

  const handleAddItem = (item)=>{
    console.log("increment counter");
    const data = [...cartItems];
    const index = data.findIndex(i => i.id === item.id);
    if(index > -1){
      data[index] = item;
      
    }
    else{
      data.push(item);
    }
    setCartItems([...data]);
  }
  const handleRemoveItem = (item)=>{
    console.log("decrement counter");
    const data = [...cartItems];
    const index = data.findIndex(i=>i.id === item.id);
    if(data[index].quantity === 0)
    {
      
      data.splice(index,1);
    }

    else if(index > -1 && data[index].quantity > 1){
      data[index]= item;
     
    }
    
    setCartItems([...data]);
    
  }

  const handleEventQueue = (id,type)=>{
    console.log({id,type})
    setEventQueue({id,type});
  }

  return (
    <div className="App">
      <Header  counter={cartItems.length} items={cartItems} handleEventQueue={handleEventQueue}/>
      <Subheader/>
      <Products handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} eventQueue={eventQueue}  />
      
    </div>
  );
}

export default App;
