import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const tableHead = [
  { field: 'id', headerName: 'ID', flex: 0 },
  { field: 'title', headerName: 'Drinks', sortable: false, flex: 0 },
  { field: 'price', headerName: 'Price ($)', type: 'number', flex: 0 },
  { field: 'quantity', headerName: 'Quantity (ml)', type: 'number', flex: 0 },
  { field: 'description', headerName: 'Description', sortable: false, flex: 1 },
];

const rows = [
  {
    id: 1,
    title: 'Iced Coffee',
    price: 2.65,
    quantity: 470,
    description: 'Is a coffee beverage served cold.',
  },
  {
    id: 2,
    title: 'Frappuccino',
    price: 3.95,
    quantity: 470,
    description: 'Coffee blended with ice and flavored syrups and topped with whipped cream.'
  },
  {
    id: 3,
    title: 'Iced Espresso',
    price: 2.25,
    quantity: 44,
    description: 'Espresso served over ice, often with milk'
  },
  {
    id: 4,
    title: 'Cappuccino',
    price: 4.36,
    quantity: 150,
    description: 'Iis the perfect balance of espresso, steamed milk and foam.'
  },
  {
    id: 5,
    title: 'Latte',
    price: 2.95,
    quantity: 250,
    description: 'Is a milk coffee that is a made up of one shot of espresso and a layer of milk on top.'
  },
  {
    id: 6,
    title: 'Coffee mocha',
    price: 4.01,
    quantity: 300,
    description: 'Is essentially a chocolate flavored variant of a cafe latte.'
  },
  {
    id: 7,
    title: 'Espresso',
    price: 2.05,
    quantity: 30,
    description: 'Is a concentrated form of coffee served in small, strong shots.'
  },
  {
    id: 8,
    title: 'Long espresso',
    price: 3.15,
    quantity: '130ml',
    description: 'Is an espresso made with more water.'
  },
  {
    id: 9,
    title: 'Americano',
    price: 2.55,
    quantity: 140,
    description: 'Is a type of coffee drink prepared by diluting an espresso with hot water.'
  },
];


export default function CoffeeTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={tableHead}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
