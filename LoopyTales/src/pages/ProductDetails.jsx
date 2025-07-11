import { useParams } from 'react-router-dom';
import '../config/products';
import './productDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>

        {product.sizes && (
          <div className="sizes">
            <h4>Select Size:</h4>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>
        )}

        <p className="description">{product.description}</p>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
