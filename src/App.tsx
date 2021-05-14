import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import './App.css';
import Checkable from './components/Checkable';
import Product, { ProductDetails } from './components/Product'

const endpoint = 'https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e'

function App() {

  const [products, setProducts] = useState([] as ProductDetails[])
  const [selectedProducts, setSelectedProducts] = useState([] as number[])
  const [deletedProducts, setDeletedProducts] = useState([] as number[])

  useEffect(() => {
    fetch(endpoint)
      .then(data => data.json() as Promise<ProductDetails[]>)
      .then(setProducts)
  }, [])

  function removeProducts() {
    setDeletedProducts(deletedProducts.concat(selectedProducts));
  }

  function selectProduct(productId:number) {
    return (isSelected:boolean) => {
      if (isSelected && selectedProducts.indexOf(productId) === -1) {
        setSelectedProducts(selectedProducts.concat(productId));
      } else if (!isSelected) {
        setSelectedProducts(selectedProducts.filter(selectedId => selectedId != productId));
      }
    }
  }

  function showAll() {
    setDeletedProducts([]);
    setSelectedProducts([]);
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={removeProducts}>Remove selected products</Button>
      <Button variant="contained" color="secondary" onClick={showAll}>Show all products</Button>
      <div className="App">
        {products.filter(product => deletedProducts.indexOf(product.productId) === -1).map(product =>
          <Checkable key={product.productId} onCheck={selectProduct(product.productId)}>
            <Product {...product} />
          </Checkable>
        )}
      </div>
    </>
  );
}

export default App;
