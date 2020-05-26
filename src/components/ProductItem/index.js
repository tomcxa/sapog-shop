import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ProductItem = ({ product, view }) => {
    const className = 'product-item product-' + view;
    const { name, price, color, img } = product;
    return (
        <div className={className}>
            <h2>{name}</h2>
            <p>{color}</p>
            <img src={img} alt={name} />
            <footer>
                <span className="danger">{price}$</span>
                <button className="btn danger">Add to cart</button>
            </footer>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductItem;
