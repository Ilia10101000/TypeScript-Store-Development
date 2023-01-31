import React, {useContext} from 'react';
import Product from './Components/Product';
import { IProduct } from './interface';
// import {ProductContext, ProductList} from './Hook/useProductContext';

const url:string = 'https://fakestoreapi.com/products';

function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(url).then(data => data.json()).then(response => setData(response))
  },[])

  return (
    <div>
  {
    data.map( (item:IProduct) => <Product product={item}/>)
  }
  </div>
    
  )
}

export default App;
