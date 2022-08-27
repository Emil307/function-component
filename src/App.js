import React from 'react';
import {ShopItemFunc} from './components/ShopItemFunc';
import logo from './logo.svg';
import './css/App.css';

export default function App () {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  }

  return <ShopItemFunc
    brand={item.brand}
    title={item.title}
    description={item.description}
    descriptionFull={item.descriptionFull}
    price={item.price}
    currency={item.currency}
    />;
};
