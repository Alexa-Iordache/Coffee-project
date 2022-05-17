import React from 'react';
import './coffee-page.css';
import CoffeeTabs from '../tabs';

export default function CoffeePage() {

  return (
    <div className='coffee-page__main-container'>
      <div className='cofee-page__title'>Coffee MENU</div>
      <div className='coffee-page__imageList'>
        <CoffeeTabs/>
      </div>
    </div>
  );
}