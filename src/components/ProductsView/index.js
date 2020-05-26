import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '../ProductItem';

import './index.css';

const ProductsView = ({products, view}) => {
    return (
        <div className="product-list">
            {
                products.map((product) => <ProductItem key={uuidv4()} view={view} product={product}/>)
            }
        </div>
    )
}

ProductsView.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductsView;
