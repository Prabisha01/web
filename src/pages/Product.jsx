import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UpNavbar from '../components/UpNavbar'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { getAllProductApi } from '../apis/Api';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Assuming getAllProductsApi fetches all products
      getAllProductApi().then((res) => {
        setProducts(res.data.products);
      });
    }, []);
  
    return (
        <>
        <div>
          <UpNavbar />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="container mt-4">
          <h2 style={{ color: "green", fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>Available Product</h2>
          <div className="row row-cols-1 row-cols-md-4 g-3">
            {products.map((item) => (
              <div key={item.productId} className="col">
                <div className="card h-100">
                  <img
                    src={item.productImageUrl}
                    className="card-img-top img-fluid"
                    alt={item.productName}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Price: Rs {item.productPrice}</p>
                    <p className="card-text">Category: {item.productCategory}</p>
                    <p className="card-text">
                      Description: {item.productDescription.slice(0, 50)}
                    </p>
                    <div className="card-actions">
                      <button className="btn btn-primary me-2">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                      </button>
                      <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faHeart} /> Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  
export default Product