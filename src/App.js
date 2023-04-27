import './App.css';
import { useState } from 'react';
const Page_product = 'product';
const page_cart = 'cart';
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('product');
  const [product] = useState([
    {
      id: 1,
      image: "https://th.bing.com/th/id/OIP.42Ui9CWlnWr6drBKF6ky4AHaFl?w=246&h=184&c=7&r=0&o=5&pid=1.7",
      name: "Blanket 111",
      price: 68,
    },
    {
      id: 2,
      image: "https://th.bing.com/th/id/OIP.va3qsLm7MlXkZBFlhM0oqQHaHa?w=154&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Taddy Beer",
      price: 88.78
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.68bV5R-ieDYaCNSWj77OigAAAA?w=164&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Bed",
      price: 672.98
    }, {
      id: 4,
      image: "https://th.bing.com/th/id/OIP.ro2UdJns_HH1Zeu0pCe8JgHaNL?w=182&h=324&c=7&r=0&o=5&pid=1.7",
      name: "Laptop 111",
      price: 1000,
    },
    {
      id: 5,
      image: "https://th.bing.com/th/id/OIP.tNExpCbyZz_Kx1PcYXsWhwHaEo?w=267&h=380&c=7&r=0&o=5&pid=1.7",
      name: "Office Tea",
      price: 17.78
    },
    {
      id: 6,
      image: "https://th.bing.com/th/id/OIP.oDvi1U1TIJmACuBOBKNvigHaKM?w=182&h=250&c=7&r=0&o=5&pid=1.7",
      name: "Burger King",
      price: 67.98
    },
    {
      id: 7,
      image: "https://th.bing.com/th/id/OIP.42Ui9CWlnWr6drBKF6ky4AHaFl?w=246&h=184&c=7&r=0&o=5&pid=1.7",
      name: "Blanket 111",
      price: 68,
    },
    {
      id: 8,
      image: "https://th.bing.com/th/id/OIP.va3qsLm7MlXkZBFlhM0oqQHaHa?w=154&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Taddy Beer",
      price: 88.78
    },
    {
      id: 9,
      image: "https://th.bing.com/th/id/OIP.68bV5R-ieDYaCNSWj77OigAAAA?w=164&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Bed",
      price: 672.98
    }, {
      id: 10,
      image: "https://th.bing.com/th/id/OIP.ro2UdJns_HH1Zeu0pCe8JgHaNL?w=182&h=324&c=7&r=0&o=5&pid=1.7",
      name: "Laptop 111",
      price: 1000,
    },
    {
      id: 11,
      image: "https://th.bing.com/th/id/OIP.M3MUubTjqMf3Y8CJa7KUYgHaE8?w=294&h=197&c=7&r=0&o=5&pid=1.7",
      name: "Office Tea",
      price: 17.78
    },
    {
      id: 12,
      image: "https://th.bing.com/th/id/OIP.oDvi1U1TIJmACuBOBKNvigHaKM?w=182&h=250&c=7&r=0&o=5&pid=1.7",
      name: "Burger King",
      price: 67.98
    },
  ]);
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== product.productToRemove)
    );
  };
  const nevigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const renderProduct = () => (
    <>
      <div className="product">
        {
          product.map((product, idx) => (
            <div className="ui" key={idx}>
              <h1>{product.name}</h1>
              <p>Price ${product.price}</p>
              <img src={product.image} alt={product.name} />
              <button onClick={() => addToCart(product)}>Add Products</button>
            </div>
          ))}
      </div>
    </>
  );
  const renderCart = () => (
    <>
      <h1>Cart....</h1>
      <div className='product'>
        {
          cart.map((product, idx) => (
            // <div className='product' key={idx}> 
            <div className="ui" key={idx}>
              <h1>{product.name}</h1>
              <p>Price ${product.price}</p>
              <img src={product.image} alt={product.name} />
              <button onClick={() => removeFromCart()}>remove</button>
            </div>
            //  </div>
          ))
        }
      </div>
    </>
  );
  return (
    <div className="App">
      <header>
        <button onClick={() => nevigateTo(page_cart)}>Go to Cart({cart.length})</button>
        <button onClick={() => nevigateTo(Page_product)}>View Product</button>
      </header>
      {
        page === Page_product && renderProduct()
      }
      {
        page === page_cart && renderCart()
      }

    </div>
  );
}

export default App;
