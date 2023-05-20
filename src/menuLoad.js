/* eslint-disable max-len */
import AmericanoBlack from './img/americanoBlack.jpg';

const loadAmericano = () => {
  // create div to store content and image
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList = ['grid grid-cols-2 bg-green-300 p-2 max-h-40 max-w-xs rounded-2xl justify-center items-center'];
  // create div to store product and price
  const content = document.createElement('div');
  content.classList = ['flex flex-col items-center gap-5'];
  // create productName element
  const product = document.createElement('h3');
  product.innerHTML = 'Americano';
  product.classList = ['text-2xl'];
  // create price element
  const price = document.createElement('section');
  price.classList = ['text-xl'];
  price.innerHTML = '50 Baht';
  content.appendChild(product);
  content.appendChild(price);
  // create image
  const image = document.createElement('img');
  image.src = AmericanoBlack;
  image.classList = ['h-100 max-h-36 rounded-2xl justify-self-end'];
  wrapperDiv.appendChild(content);
  wrapperDiv.appendChild(image);
  return wrapperDiv;
};


const loadMenu = () => {
  const menu = document.createElement('div');
  menu.classList = [
    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-10',
  ];
  menu.id = 'actualContent';
  menu.appendChild(loadAmericano());
  // home.appendChild(loadwrapperDiv());
  // home.appendChild(loadApproach());
  // home.appendChild(loadIngredients());
  return menu;
};

export {loadMenu};
