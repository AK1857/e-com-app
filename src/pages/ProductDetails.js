import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart,cartItems } = useContext(CartContext);

  const product = location.state?.product;
  //const [cart, setCart] = useState([]);

  if (!product) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const handleAddToCart = () => {

    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

// const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = cartItems.find((item) => item.id === product.id);
  
//       if (existingItem) {
//         // Product already in cart → increase quantity
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // New product → add with quantity 1
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };
  
  

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-btn" onClick={()=>handleAddToCart(product)}>
          Add to MyCart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

