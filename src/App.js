import React from "react";

import Store from "./components/Store";
import products from './products';

function App() {
    return (
        <div className="App">
            <Store products={products}/>
        </div>
    );
}

export default App;
