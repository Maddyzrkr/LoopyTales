// import { useState, useRef, useEffect } from "react";
// import navLinks from "../../config/navigation";
// import { Search, CircleUserRound, ShoppingCart, X } from "lucide-react";
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import { Mail, Instagram } from "lucide-react";
// import { Link } from 'react-router-dom';
// import './navbar.css';
// import './cart-drawer.css';
// import { useCart } from '../../context/CartContext';
// import AuthModal from "../../auth/authModal"; 

// function Heading() {
//   const [hovered, setHovered] = useState(false);
//   const [showContact, setShowContact] = useState(false);
//   const contactRef = useRef(null);
//   const [state, setState] = useState({ right: false });
//   const [isAuthOpen, setAuthOpen] = useState(false);


//   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   function handleMouseEnter() {
//     setHovered(true);
//   }

//   function handleMouseLeave() {
//     setHovered(false);
//   }

//   function handleContactClick() {
//     setShowContact(!showContact);
//   }

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (contactRef.current && !contactRef.current.contains(event.target)) {
//         setShowContact(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="heading">
//       <h1>Loopy Tales</h1>
//       <nav>
//         <ul>
//           {navLinks.map((link, index) => (
//             <li className="list" key={index}>
//               {link.name === "Contact" ? (
//                 <div className="contact-wrapper" ref={contactRef}>
//                   <span onClick={handleContactClick}>{link.name}</span>
//                   {showContact && (
//                     <div className="contact-dropdown">
//                       <a href="mailto:maddyzarekar@gmail.com">
//                         <Mail size={16} style={{ marginRight: "8px" }} />
//                         Email
//                       </a>
//                       <a href="https://www.instagram.com/loooopyy_tales90/#" target="_blank" rel="noopener noreferrer">
//                         <Instagram size={16} style={{ marginRight: "8px" }} />
//                         Instagram
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link to={link.path} className="react-link">{link.name}</Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="icons">
//         <CircleUserRound color="gray" />
//         <div className="cart-icon-wrapper" onClick={toggleDrawer('right', true)}>
//           <ShoppingCart color="gray" size={28} />
//         </div>
//         <SwipeableDrawer
//           anchor={'right'}
//           open={state['right']}
//           onClose={toggleDrawer('right', false)}
//           onOpen={toggleDrawer('right', true)}
//         >
//           <div className="cart-drawer">
//             <div className="cart-header">
//               <h2>Your Cart</h2>
//               <X className="close-cart" onClick={toggleDrawer('right', false)} />
//             </div>
//             <div className="cart-items">
//               {cartItems.length === 0 ? (
//                 <p className="empty-cart">Your cart is empty.</p>
//               ) : (
//                 cartItems.map((item, index) => (
//                   <div key={index} className="cart-item">
//                     <img src={item.image} alt={item.name} className="cart-thumb" />
//                     <div className="cart-item-details">
//                       <h4>{item.name}</h4>
//                       <p className="item-price">{item.price}</p>
//                       {item.size && <p className="item-size">Size: {item.size}</p>}

//                       <div className="quantity-controls">
//                         <button onClick={() => decreaseQuantity(item)}>-</button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => increaseQuantity(item)}>+</button>
//                       </div>

//                       <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {cartItems.length > 0 && (
//               <div className="cart-footer">
//                 <button className="checkout-btn">Proceed to Checkout</button>
//               </div>
//             )}
//           </div>
//         </SwipeableDrawer>
//       </div>
//     </div>
//   );
// }

// export default Heading;

import { useState, useRef, useEffect } from "react";
import navLinks from "../../config/navigation";
import { Search, CircleUserRound, ShoppingCart, X } from "lucide-react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Mail, Instagram } from "lucide-react";
import { Link } from 'react-router-dom';
import './navbar.css';
import './cart-drawer.css';
import { useCart } from '../../context/CartContext';
import AuthModal from '../../auth/AuthModal';
function Heading() {
  const [hovered, setHovered] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);
  const [state, setState] = useState({ right: false });
  const [isAuthOpen, setAuthOpen] = useState(false);

  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
  <>
    <div className="heading">
      <h1>Loopy Tales</h1>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li className="list" key={index}>
              {link.name === "Contact" ? (
                <div className="contact-wrapper" ref={contactRef}>
                  <span onClick={() => setShowContact(!showContact)}>{link.name}</span>
                  {showContact && (
                    <div className="contact-dropdown">
                      <a href="mailto:maddyzarekar@gmail.com">
                        <Mail size={16} style={{ marginRight: "8px" }} /> Email
                      </a>
                      <a
                        href="https://www.instagram.com/loooopyy_tales90/#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={16} style={{ marginRight: "8px" }} /> Instagram
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.path} className="react-link">{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="icons">
        {/* 👤 User icon opens AuthModal */}
        <div className="user-icon-wrapper" onClick={() => setAuthOpen(true)}>
          <CircleUserRound color="gray" size={28} />
        </div>

        {/* 🛒 Cart icon opens drawer */}
        <div className="cart-icon-wrapper" onClick={toggleDrawer('right', true)}>
          <ShoppingCart color="gray" size={28} />
        </div>

        {/* Cart Drawer */}
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          <div className="cart-drawer">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <X className="close-cart" onClick={toggleDrawer('right', false)} />
            </div>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.size}`} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-thumb" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">{item.price}</p>
                      {item.size && <p className="item-size">Size: {item.size}</p>}
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            )}
          </div>
        </SwipeableDrawer>
      </div>
    </div>

    {/* 🪟 Auth Modal rendered at root level */}
    {isAuthOpen && <AuthModal  isOpen={isAuthOpen}
    onClose={() => setAuthOpen(false)} />}
  </>
);}

export default Heading;
