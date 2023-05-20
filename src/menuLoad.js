/* eslint-disable max-len */
import AmericanoBlack from './img/americanoBlack.jpg';
import Macchiato from './img/machiato.jpg';
import Espresso from './img/espresso.jpg';
import CafeAuLait from './img/cafeAuLait.jpg';
import OrangeAmericano from './img/orangeAmericano.jpg';
import WhiteMacchiato from './img/whiteMachiato.jpg';
import ThaiTea from './img/thaiTea.jpg';

const loadMenuItem = (productName, productPrice, productImage) => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList = [
    'grid grid-cols-2 bg-green-300 p-2 rounded-2xl justify-center items-center',
  ];
  // create div to store product and price
  const content = document.createElement('div');
  content.classList = ['flex flex-col items-center gap-5'];
  // create productName element
  const product = document.createElement('h3');
  product.innerHTML = productName;
  product.classList = ['text-2xl'];
  // create price element
  const price = document.createElement('section');
  price.classList = ['text-xl'];
  price.innerHTML = productPrice;
  content.appendChild(product);
  content.appendChild(price);
  // create image
  const image = document.createElement('img');
  image.src = productImage;
  image.classList = ['h-100 rounded-2xl justify-self-end'];
  wrapperDiv.appendChild(content);
  wrapperDiv.appendChild(image);
  return wrapperDiv;
};

const loadMenu = () => {
  const menu = document.createElement('div');
  menu.classList = [
    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-3 justify-start items-center lg:grid lg:grid-cols-2 grid-rows-auto xl:grid xl:grid-cols-3',
  ];
  menu.id = 'actualContent';
  menu.appendChild(loadMenuItem('Americano', '50 Baht', AmericanoBlack));
  menu.appendChild(loadMenuItem('Macchiato', '60 Baht', Macchiato));
  menu.appendChild(loadMenuItem('Espresso', '45 Baht', Espresso));
  menu.appendChild(loadMenuItem('Cafe au Lait', '55 Baht', CafeAuLait));
  menu.appendChild(loadMenuItem('Orange Americano', '60 Baht', OrangeAmericano));
  menu.appendChild(loadMenuItem('White Macchiato', '65 Baht', WhiteMacchiato));
  menu.appendChild(loadMenuItem('Thai Tea', '50 Baht', ThaiTea));
  return menu;
};

export {loadMenu};
