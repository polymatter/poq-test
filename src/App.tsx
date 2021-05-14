import { useEffect, useState } from 'react';
import './App.css';
import Checkable from './components/Checkable';
import Product, { ProductDetails } from './components/Product'

const endpoint = 'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e'

function App() {

  const [products, setProducts] = useState([] as ProductDetails[])

  useEffect(() => {
    fetch(endpoint)
    .then(data => data.json() as Promise<ProductDetails[]>)
    .then(setProducts)
  }, [])

  return (
    <div className="App">
      { products.map(product =>
        <Checkable key={product.productId}>
          <Product {...product}/>
        </Checkable>
      )}
    </div>
  );
}

export default App;
