import React from 'react';
import Mycart from './Mycart';

import Itemlist from './Itemlist';
import { useGlobalCart } from './Context'

import './Style.css'

export default function Cart() {
    const { loading } = useGlobalCart();

    if (loading) {
        return (
          <div className="center-middle">
            <h4> Loading....</h4>
          </div>
        );
    }

    return (
      <div className="cart-container-box scroll-box">
        <div className="content-box-cart">
          <Mycart />
          <div style={{ marginTop: "60px" }}>
            <Itemlist />
          </div>
        </div>
      </div>
    );
}
