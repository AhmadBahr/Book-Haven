import React from 'react';
import { useParams } from 'react-router-dom';
import data_product from '../Assets/data'; 

const DetailsPage = () => {
  const { productId } = useParams();
  const product = data_product.find((p) => p.id === parseInt(productId, 10));
  
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%' }} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default DetailsPage;
