import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IconButton, ImageListItemBar } from '@mui/material';
import { GoInfo } from 'react-icons/go';
import image1 from './images/cappuccino.png';
import image2 from './images/latte.png';
import image3 from './images/coffee_mocha.png';

// function to calculate the proper size of an image
// the 'srcset' attribute allows me to specify a list of images along with dimension I want the images
// to have (itemData)
// I also used 'src' attribute in case the browser does not support 'srcset'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function HotCoffee() {
    return(
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
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => { console.log('onClick'); }} // when the info button is pressed -> a modal with the info should appear
                  >
                      <GoInfo/>
                  </IconButton>
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
      title: 'Cappuccino',
      rows: 2,  // the first image I want to occupy 2 rows and 2 columns
      cols: 2,
    },
    {
      img: image2,
      title: 'Latte',  // this image will occupy 1 row and 2 columns 
      cols: 2
    },
    {
      img: image3,
      title: 'Coffee mocha',
      cols: 2,
    },
  ];