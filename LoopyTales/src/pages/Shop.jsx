

// import { useEffect, useState } from 'react';
// import products from '../config/products'; 
// import { motion } from 'framer-motion';
// import { useCart } from '../context/CartContext';
// import './shop.css';

// function Shop() {
//   const [items, setItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedSize, setSelectedSize] = useState('');
//   const { addToCart } = useCart(); // Assuming you have a CartContext to manage cart state

//   useEffect(() => {
//     setItems(products);
//   }, []);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedImage(product.images?.[0] || product.image);
//     setCurrentImageIndex(0);
//     setSelectedSize('');
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = 'auto';
//   };

//   const handleThumbnailClick = (index) => {
//     if (selectedProduct && selectedProduct.images) {
//       setSelectedImage(selectedProduct.images[index]);
//       setCurrentImageIndex(index);
//     }
//   };

//   const handlePrevImage = () => {
//     if (selectedProduct && selectedProduct.images) {
//       const newIndex = (currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
//       setSelectedImage(selectedProduct.images[newIndex]);
//       setCurrentImageIndex(newIndex);
//     }
//   };

//   const handleNextImage = () => {
//     if (selectedProduct && selectedProduct.images) {
//       const newIndex = (currentImageIndex + 1) % selectedProduct.images.length;
//       setSelectedImage(selectedProduct.images[newIndex]);
//       setCurrentImageIndex(newIndex);
//     }
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   return (
//     <div className="shop-container">
//       <h2 className="shop-heading">Shop All</h2>
//       <p className="shop-subtext">Explore our handmade crochet pieces</p>

//       <div className="product-grid">
//         {items.map((product, index) => (
//           <motion.div
//             className="product-card"
//             key={product.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             onClick={() => handleProductClick(product)}
//           >
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p className="product-price">{product.price}</p>
//               <button className="add-to-cart"
//               onClick={() => {
//                 if (selectedSize) {
//                   addToCart(selectedProduct, selectedSize);
//                   closeModal(); // optional
//                 } else {
//                   alert('Please select a size!');
//                 }
//               }}
//               >
//                 Add to Cart</button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProduct && (
//         <div className="modal-backdrop" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-gallery">
//               <div className="carousel">
//                 <button className="carousel-arrow" onClick={handlePrevImage}>&lt;</button>
//                 <img src={selectedImage} alt="Selected" className="modal-image" />
//                 <button className="carousel-arrow" onClick={handleNextImage}>&gt;</button>
//               </div>
//               <div className="thumbnail-row">
//                 {selectedProduct.images?.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img}
//                     alt={`thumb-${i}`}
//                     className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
//                     onClick={() => handleThumbnailClick(i)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="modal-details">
//               <h3>{selectedProduct.name}</h3>
//               <p className="product-price">{selectedProduct.price}</p>
//               {selectedProduct.description && <p className="product-desc">{selectedProduct.description}</p>}
//               {selectedProduct.material && <p className="product-meta"><strong>Material:</strong> {selectedProduct.material}</p>}
//               {selectedProduct.care && <p className="product-meta"><strong>Care:</strong> {selectedProduct.care}</p>}

//               <div className="size-selector">
//                 {selectedProduct.sizes?.map((size) => (
//                   <button
//                     key={size}
//                     className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                     onClick={() => handleSizeSelect(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//               <button className="add-to-cart">Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;


// import { useEffect, useState } from 'react';
// import products from '../config/products'; 
// import { motion } from 'framer-motion';
// import './shop.css';
// import { useCart } from '../context/CartContext';

// function Shop() {
//   const [items, setItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [showAddedMessage, setShowAddedMessage] = useState(false);

//   const { addToCart } = useCart();

//   useEffect(() => {
//     setItems(products);
//   }, []);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedImage(product.images?.[0] || product.image);
//     setCurrentImageIndex(0);
//     setSelectedSize('');
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = 'auto';
//   };

//   const handleThumbnailClick = (index) => {
//     if (selectedProduct && selectedProduct.images) {
//       setSelectedImage(selectedProduct.images[index]);
//       setCurrentImageIndex(index);
//     }
//   };

//   const handlePrevImage = () => {
//     if (selectedProduct && selectedProduct.images) {
//       const newIndex = (currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
//       setSelectedImage(selectedProduct.images[newIndex]);
//       setCurrentImageIndex(newIndex);
//     }
//   };

//   const handleNextImage = () => {
//     if (selectedProduct && selectedProduct.images) {
//       const newIndex = (currentImageIndex + 1) % selectedProduct.images.length;
//       setSelectedImage(selectedProduct.images[newIndex]);
//       setCurrentImageIndex(newIndex);
//     }
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize) {
//       alert("Please select a size before adding to cart.");
//       return;
//     }

//     const itemToAdd = {
//       id: selectedProduct.id,
//       name: selectedProduct.name,
//       image: selectedProduct.image,
//       price: selectedProduct.price,
//       size: selectedSize || null,
//     };

//     addToCart(itemToAdd);
//     closeModal();
//     setShowAddedMessage(true);
//     setTimeout(() => setShowAddedMessage(false), 2000);
//   };

//   return (
//     <div className="shop-container">
//       <h2 className="shop-heading">Shop All</h2>
//       <p className="shop-subtext">Explore our handmade crochet pieces</p>

//       <div className="product-grid">
//         {items.map((product, index) => (
//           <motion.div
//             className="product-card"
//             key={product.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             onClick={() => handleProductClick(product)}
//           >
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p className="product-price">{product.price}</p>
//               <button className="add-to-cart">Add to Cart</button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProduct && (
//         <div className="modal-backdrop" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-gallery">
//               <div className="carousel">
//                 <button className="carousel-arrow" onClick={handlePrevImage}>&lt;</button>
//                 <img src={selectedImage} alt="Selected" className="modal-image" />
//                 <button className="carousel-arrow" onClick={handleNextImage}>&gt;</button>
//               </div>
//               <div className="thumbnail-row">
//                 {selectedProduct.images?.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img}
//                     alt={`thumb-${i}`}
//                     className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
//                     onClick={() => handleThumbnailClick(i)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="modal-details">
//               <h3>{selectedProduct.name}</h3>
//               <p className="product-price">{selectedProduct.price}</p>
//               {selectedProduct.description && <p className="product-desc">{selectedProduct.description}</p>}
//               {selectedProduct.material && <p className="product-meta"><strong>Material:</strong> {selectedProduct.material}</p>}
//               {selectedProduct.care && <p className="product-meta"><strong>Care:</strong> {selectedProduct.care}</p>}

//               {selectedProduct.sizes?.length > 0 && (
//                 <div className="size-selector">
//                   {selectedProduct.sizes.map((size) => (
//                     <button
//                       key={size}
//                       className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                       onClick={() => handleSizeSelect(size)}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               )}
//               <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showAddedMessage && (
//         <div className="added-to-cart-toast">Item added to cart!</div>
//       )}
//     </div>
//   );
// }

// export default Shop;

import { useEffect, useState } from 'react';
import products from '../config/products'; 
import { motion } from 'framer-motion';
import './shop.css';
import { useCart } from '../context/CartContext';

function Shop() {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    setItems(products);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.images?.[0] || product.image);
    setCurrentImageIndex(0);
    setSelectedSize('');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const handleThumbnailClick = (index) => {
    if (selectedProduct && selectedProduct.images) {
      setSelectedImage(selectedProduct.images[index]);
      setCurrentImageIndex(index);
    }
  };

  const handlePrevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      const newIndex = (currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length;
      setSelectedImage(selectedProduct.images[newIndex]);
      setCurrentImageIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      const newIndex = (currentImageIndex + 1) % selectedProduct.images.length;
      setSelectedImage(selectedProduct.images[newIndex]);
      setCurrentImageIndex(newIndex);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === selectedProduct.id && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      const updatedItem = { ...cartItems[existingItemIndex] };
      updatedItem.quantity += 1;
      addToCart(updatedItem, true); // Pass flag to update instead of pushing
    } else {
      const newItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        image: selectedProduct.image,
        price: selectedProduct.price,
        size: selectedSize || null,
        quantity: 1
      };
      addToCart(newItem,true);
    }

    closeModal();
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  return (
    <div className="shop-container">
      <h2 className="shop-heading">Shop All</h2>
      <p className="shop-subtext">Explore our handmade crochet pieces</p>

      <div className="product-grid">
        {items.map((product, index) => (
          <motion.div
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-gallery">
              <div className="carousel">
                <button className="carousel-arrow" onClick={handlePrevImage}>&lt;</button>
                <img src={selectedImage} alt="Selected" className="modal-image" />
                <button className="carousel-arrow" onClick={handleNextImage}>&gt;</button>
              </div>
              <div className="thumbnail-row">
                {selectedProduct.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(i)}
                  />
                ))}
              </div>
            </div>

            <div className="modal-details">
              <h3>{selectedProduct.name}</h3>
              <p className="product-price">{selectedProduct.price}</p>
              {selectedProduct.description && <p className="product-desc">{selectedProduct.description}</p>}
              {selectedProduct.material && <p className="product-meta"><strong>Material:</strong> {selectedProduct.material}</p>}
              {selectedProduct.care && <p className="product-meta"><strong>Care:</strong> {selectedProduct.care}</p>}

              {selectedProduct.sizes?.length > 0 && (
                <div className="size-selector">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {showAddedMessage && (
        <div className="added-to-cart-toast">Item added to cart!</div>
      )}
    </div>
  );
}

export default Shop;
