import { useEffect, useState } from 'react'
import './App.css'

function useItems(){
  const [items, setItems] : [CartItem[], any]= useState([])
  useEffect(()=>{
    setItems([
      {
        name : "Breaking Bach",
        cost : 14.99
      },
      {
        name : "Guardians of the Gaughin",
        cost : 12.95
      },
      {
        name : "Barbthoven",
        cost : 9.99
      }
    ])
  },[])
  return items
}

interface CartItem {
  name : string;
  cost : number;
}

function getItemsTotal(items : CartItem[]) : number {
  console.info("Tabulating values")
  const prices = items.map(i => i.cost)
  // let total = -1
  let total = 0
  for (const price of prices) {
    total += price
  }
  console.info("Calculated price", total)
  // total += prices.reduce((a,b)=>a+b,0)
  console.info("Returning total value", total)
  return total
}

function App() {
  const shoppingCartItems : CartItem[] = useItems()
  const total = getItemsTotal(shoppingCartItems)
  console.info("Application is rendering.")
  return (
    <div style={{
      display : "flex",
      flexDirection : "column",
      gap : 8
    }}>
       <h1>
        Your Shopping Cart
       </h1>
       {shoppingCartItems.map((item, i) => (
        <div key={i}> 
          {item.name} - {item.cost}
          
        </div>
       ))}
       <h2>
        Your Total: ${total}
       </h2>
       <h3>
        <button>Check Out</button>
       </h3>
    </div>
  )
}

export default App
