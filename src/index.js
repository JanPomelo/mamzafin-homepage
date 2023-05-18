import './style.css';
import {loadPage} from './pageLoad';
import {loadHome} from './homeLoad';
import {loadMenu} from './menuLoad';
import {loadContact} from './contactLoad';
const content = document.getElementById('content');
const contentToAdd = loadPage();

for (let i = 0; i < contentToAdd.length; i++) {
  content.appendChild(contentToAdd[i]);
}

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

const deleteOldContent = () => {
  const oldContent = document.getElementById('actualContent');
  oldContent.remove();
};

home.addEventListener('click', () => {
  deleteOldContent();
  const main = document.getElementById('main');
  main.appendChild(loadHome());
});

menu.addEventListener('click', () => {
  deleteOldContent();
  const main = document.getElementById('main');
  main.appendChild(loadMenu());
});

contact.addEventListener('click', () => {
  deleteOldContent();
  const main = document.getElementById('main');
  main.appendChild(loadContact());
});


