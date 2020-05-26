import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductsView from '../ProductsView';
import IconSwitch from '../IconSwitch';

import './index.css';

const Store = ({products}) => {
    const cardView = 'view_module';
    const listView = 'view_headline';

    const [view, setView] = useState(cardView);

    const onSwitch = () => {
        setView((prevView) => {
            return (prevView === cardView ? listView : cardView);
        });
    }

    return (
        <div className="store">
            <IconSwitch icon={view} onSwitch={onSwitch}/>
            <ProductsView products={products} view={view}/>
        </div>
    )
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
}

export default Store;
