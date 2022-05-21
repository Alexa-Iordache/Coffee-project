import React from 'react';
import './coffee-page.css';
import CoffeeTabs from '../tabs';
import EnhancedTable from '../table';

export default function CoffeePage() {

  return (
    <div className='coffee-page__main-container'>
      <div className='cofee-page__title'>Coffee MENU</div>
      <div className='coffee-page__imageList'>
        <CoffeeTabs  />
      </div>
      <div className='coffee-page__table'>
        <EnhancedTable/>
      </div>
    </div>
  );
}