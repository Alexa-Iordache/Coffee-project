import React, { useState } from "react";
import ModalInfo from "../modal";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IconButton, ImageListItemBar } from '@mui/material';
import { GoInfo } from 'react-icons/go';
import image1 from './images/espresso_scurt.png';
import image2 from './images/espresso_lung.png';
import image3 from './images/americano.png';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function StrongCoffee() {

  // for the modal
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpen = (item) => {
    setOpen(true);
    setValue(item.value);
  }
  const handleClose = () => {
    setOpen(false);
  }


  return (
    <ImageList
      sx={{ width: 800, height: 400 }}
      cols={4}  // I want only 4 images on the page 
      rowHeight={200}
    >
      {itemData.map((item) => (

        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <div>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => { handleOpen(item, value) }} // when the info button is pressed -> a modal with the info should appear
                >
                  <GoInfo />
                </IconButton>

                {/* ------ Modal will appear with the info about the coffe ------ */}
                <ModalInfo itemNeeded={itemData}
                  open={open}
                  handleClose={() => { handleClose(value) }}
                  value={value}
                />
              </div>
            }
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: 'Espresso',
    rows: 2,  // the first image I want to occupy 2 rows and 2 columns
    cols: 2,
    value: '0',
    price: '2.05$',
    quantity: '30ml',
    description: 'Is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks.'
  },
  {
    img: image2,
    title: 'Long espresso',  // this image will occupy 1 row and 2 columns 
    cols: 2,
    value: '1',
    price: '3.15$',
    quantity: '130ml',
    description: 'Is an espresso made with more water.'
  },
  {
    img: image3,
    title: 'Americano',
    cols: 2,
    value: '2',
    price: '2.55$',
    quantity: '140ml',
    description: 'Is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.'
  },
];