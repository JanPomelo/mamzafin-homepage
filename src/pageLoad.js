import Logo from './img/logo.jpeg';
import {loadHome} from './homeLoad.js';

const loadHeaderContent = () => {
  const helperDiv = document.createElement('div');
  const heading = document.createElement('h2');
  heading.innerText = 'Mamzafin';
  heading.classList = ['text-center self-center font-bold text-3xl'];
  const image = new Image();
  image.src = Logo;
  image.classList = ['h-full mix-blend-multiply ml-auto'];
  return {helperDiv, heading, image};
};

const loadHeader = () => {
  const header = document.createElement('header');
  // eslint-disable-next-line max-len
  header.classList = ['bg-green-600 h-12 w-screen grid grid-cols-3 grid-rows-1 justify-center pr-2 pl-2'];
  const headerContent = loadHeaderContent();
  for (const [key, value] of Object.entries(headerContent)) {
    header.appendChild(value);
  }
  return header;
};

const loadMainTabContent = () => {
  const home = document.createElement('div');
  home.innerText = 'Home';
  const menu = document.createElement('div');
  menu.innerText = 'Menu';
  const contact = document.createElement('div');
  contact.innerText = 'Contact';
  return {home, menu, contact};
};

const loadMainTab = () => {
  const mainTab = document.createElement('nav');
  // eslint-disable-next-line max-len
  mainTab.classList = ['h-10 bg-green-200 flex flex-column justify-around items-start'];
  const mainTabContent = loadMainTabContent();
  for (const [key, value] of Object.entries(mainTabContent)) {
    // eslint-disable-next-line max-len
    value.classList = ['text-xl w-20 text-center mt-0 rounded-b-md border-solid border-b-2 border-b-black hover:bg-green-400 active:bg-green-600 shadow-xl active:shadow-2xl'];
    mainTab.appendChild(value);
  }
  return mainTab;
};

const loadMain = () => {
  const main = document.createElement('main');
  main.classList = ['w-screen flex-grow'];
  main.appendChild(loadMainTab());
  main.appendChild(loadHome());
  return main;
};

const loadFooterContent = () => {
  const text1 = document.createElement('p');
  const text2 = document.createElement('p');
  text1.innerText = 'A Project done by JanPomelo';
  text2.innerText = 'All Rights Reserved';
  return {text1, text2};
};

const loadFooter = () => {
  const footer = document.createElement('footer');
  footer.classList = ['bg-green-600 h-12 w-screen text-center'];
  const footerContent = loadFooterContent();
  for (const [key, value] of Object.entries(footerContent)) {
    footer.appendChild(value);
  }
  return footer;
};

const loadPage = () => {
  return [loadHeader(), loadMain(), loadFooter()];
};

export {loadPage};
