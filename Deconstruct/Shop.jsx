import "./css/Card.css";
import min from "../Img/min2.webp"
import max from "../Img/max2.webp"

import img1 from "../Img/shop1.webp";
import img2 from "../Img/shop2.webp";
import img3 from "../Img/shop3.webp";
import img4 from "../Img/shop4.webp";
import img5 from "../Img/shop5.webp";


export default function Shop() {
  const products = [
      {
        id: 1,
        title: "Anti-Acne Skincare Routine Kit for Oily Skin",
        image: img2,
        oldPrice: "₹1,769",
        price: "₹1,327",
        rating: "4.5",
      },
      {
        id: 2,
        title: "Skin Brightening Routine Kit For Dull Skin",
        image: img1,
        oldPrice: "₹1,599",
        price: "₹1,199",
        rating: "4.2",
      },
      {
        id: 3,
        title: "Anti-Pigmentation Skincare Routine Kit",
        image: img3,
        oldPrice: "₹1,499",
        price: "₹1,099",
        rating: "4.3",
      },
      {
        id: 4,
        title: "Summer Brightening Skincare Routine Kit",
        image: img4,
        oldPrice: "₹1,899",
        price: "₹1,399",
        rating: "4.6",
      },
      {
        id: 5,
        title: "Summer Essential Skincare Routine Kit ",
        image: img5,
        oldPrice: "₹1,699",
        price: "₹1,299",
        rating: "4.1",
      },
      
    ];
  
    const addToCart = (product) => {
      alert(`${product.title} Added to Cart`);
    };
  
    return (

      <>

      <div>
        <img src={max} alt="Desktop" className="desktop-img" />
        <img src={min} alt="Mobile" className="mobile-img" />
      </div>


      <div className="cards-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
           
  
            <img
              src={product.image}
              alt={product.title}
              className="card-img"
            />
  
            <h3 className="card-title">{product.title}</h3>
  
            <div className="price-box">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.price}</span>
            </div>
  
           
  
            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      </>
    );
  }