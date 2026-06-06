import "./css/Card.css";
import min from "../Img/min.webp"
import max from "../Img/max.webp"


import img1 from "../Img/1.webp";
import img2 from "../Img/2.webp";
import img3 from "../Img/3.webp";
import img4 from "../Img/4.webp";
import img5 from "../Img/5.webp";
import img6 from "../Img/6.webp";
import img7 from "../Img/7.webp";
import img8 from "../Img/8.webp";
import img9 from "../Img/9.webp";

export default function Cards() {

  

  
  const products = [
    {
      id: 1,
      title: "Anti-Acne Skincare Routine Kit for Oily Skin",
      image: img1,
      oldPrice: "₹1,769",
      price: "₹1,327",
      rating: "4.5",
    },
    {
      id: 2,
      title: "Skin Brightening Routine Kit For Dull Skin",
      image: img2,
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
    {
      id: 6,
      title: "Summer Essential Skincare Routine Kit ",
      image: img6,
      oldPrice: "₹1,799",
      price: "₹1,349",
      rating: "4.4",
    },
    {
      id: 7,
      title: "ydration Skincare Routine Kit for Men & Women",
      image: img7,
      oldPrice: "₹1,999",
      price: "₹1,499",
      rating: "4.7",
    },
    {
      id: 8,
      title: "Detan SPF Trio",
      image: img8,
      oldPrice: "₹1,599",
      price: "₹1,249",
      rating: "4.3",
    },
    {
      id: 9,
      title: "Oil-Free Daily Skincare Routine Kit",
      image: img9,
      oldPrice: "₹1,699",
      price: "₹1,299",
      rating: "4.2",
    },
    {
      id: 10,
      title: "Bestseller Combo - Vitamin C Serum + Gel Sunscreen",
      image: img1,
      oldPrice: "₹1,769",
      price: "₹1,327",
      rating: "4.5",
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
      ))
      
      
      
      
      }
    </div>
    </>
    
  );
}