
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  // const coffees =useLoaderData();
  const loadedCoffees =useLoaderData();

  const [coffees,setCoffees]=useState(loadedCoffees);

  return (
     <>
         <Navber></Navber>
    <div className='m-20'>
      
      <h1 className='text-blue-500 text-center'>Total coffees are : {coffees.length}</h1>
       {/* {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
       } */}

       <div className='grid md:grid-cols-2 gap-4'>
       {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}

        coffees={coffees}
        setCoffees= {setCoffees}
        
        ></CoffeeCard>)
       }
       </div>
    </div>
     </>
  )
}

export default App





