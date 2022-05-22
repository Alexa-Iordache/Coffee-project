import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import StrongCoffee from "../strongCoffee";
import HotCoffee from "../hotCoffee";
import ColdCoffee from "../coldCoffee";
import './tabs.css';

// the function used to display the tabs with the coffee images
export default function CoffeeTabs() {
  const [value, setValue] = useState(0);

  const handleTabs = (event, value) => {
    setValue(value);
    console.log(value);
  }

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#800000'}}>
        <Tabs value={value} onChange={handleTabs} style={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <Tab label="STRONG COFFEE" value={0} style={{color: '#90b1c8', display: 'flex'}} />
          <Tab label="HOT COFFE WITH MILK" value={1} style={{color: '#90b1c8', display: 'flex'}} />
          <Tab label="COLD COFFE" value={2} style={{color: '#90b1c8', display: 'flex'}} />
        </Tabs>
      </AppBar>

      {value === 0 ? <StrongCoffee /> : null}
      {value === 1 ? <HotCoffee/> : null}
      {value === 2 ? <ColdCoffee/> : null}
    </div>
  );
}