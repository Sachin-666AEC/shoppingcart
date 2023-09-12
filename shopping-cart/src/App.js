
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/MyCart';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAabuPdrZ-QMa-VfaVqch-jTDCg8MTqbvawg&usqp=CAU',
      name: 'White Shoes',
      seller: 'UK',
      price: 500
    },
    {
      url: 'https://m.media-amazon.com/images/I/41TiopG4SeL.jpg',
      name: 'watches',
      seller: 'india',
      price: 1000 
    },
    {
      url: 'https://www.jagranimages.com/images/newimg/03082022/03_08_2022-mini_laptop_covor_image_22949908.jpg',
      name: 'laptops',
      seller: 'uk',
      price: 40000
    },
    {
      url: 'https://www.jiomart.com/images/product/original/491362271/nikon-d850-dslr-camera-with-24-120-mm-lens-kit-digital-o491362271-p590038885-5-202009260621.jpeg?im=Resize=(420,420)',
      name: 'camera',
      seller: 'canda',
      price: 10000 
    },
    {
      url: 'https://m.media-amazon.com/images/I/7161FFpHQEL._UX679_.jpg',
      name: 'cap',
      seller: 'delhi',
      price: 100
    },
    {
      url: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/cup-saucer/5/3/s/nil-j-tea-cup-red-6pcs-jony-original-imaggdkdhsfuhu7q.jpeg?q=90',
      name: 'Cup',
      seller: 'kochi',
      price: 500
    },
    
  ])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false) 

  const addToCart = (data) => {
    setCart([...cart,{ ...data, quantity: 1}])
  }

  const handleShow =(value)=> {
    setShowCart(value)

  }
return (
    <div>
   <Header count={cart.length} 
     handleShow={handleShow} ></Header>

   {
    showCart ?
    <CartList cart={cart}></CartList>:
    <ProductList product={product} addToCart={addToCart} ></ProductList>
   }
   
   </div>
  );
}

export default App;
