import React from 'react';
import "../css/App.css";

function ShopItemFunc(props) {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className="highlight-overlay">
        </div>
      </div>
      <div className="window">
        <div class="main-content">
          <h2>{props.brand}</h2>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
          <div class="description">
            {props.descriptionFull}
          </div>
          <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
          <div class="divider"></div>
          <div class="purchase-info">
            <div class="price">{props.price}{props.currency}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export {ShopItemFunc};