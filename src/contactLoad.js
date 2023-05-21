/* eslint-disable max-len */

import Map from './img/maps.png';
import Logo from './img/logo.jpeg';

const loadContentDiv = () => {
  // create Heading
  const heading = document.createElement('h2');
  heading.innerHTML = 'You want to contact us?';
  heading.classList = ['text-3xl lg:text-5xl'];
  // create section
  const section = document.createElement('section');
  section.innerHTML = 'There are several ways how to contact us. We have Line, Instagram and Facebook. But the best idea would be to just come over and drink a delicious coffee in our cozy cafe! Click on the map to see where exactly you can find us. See you soon!';
  section.classList = ['lg:text-2xl'];
  const smallWrapper = document.createElement('div');
  smallWrapper.appendChild(heading);
  smallWrapper.appendChild(section);
  const logo = document.createElement('img');
  logo.src = Logo;
  logo.classList = ['w-0 invisible mix-blend-multiply lg:visible lg:w-7/12 justif-self-end'];
  // create Wrapper Div for heading and section
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList = ['flex flex-col items-center justify-around lg:h-full'];
  wrapperDiv.appendChild(smallWrapper);
  wrapperDiv.appendChild(logo);
  return wrapperDiv;
};

const loadMap = () => {
  const map = document.createElement('img');
  map.src = Map;
  map.classList = [' w-full sm:w-4/5 lg:w-full rounded-3xl border-4 border-green-600'];
  return map;
};

const loadContact = () => {
  const contact = document.createElement('div');
  contact.classList = [
    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col items-center gap-10 lg:grid lg:grid-cols-2 lg:items-start',
  ];
  contact.id = 'actualContent';
  contact.appendChild(loadContentDiv());
  contact.appendChild(loadMap());
  // home.appendChild(loadApproach());
  // home.appendChild(loadIngredients());
  return contact;
};

export {loadContact};
