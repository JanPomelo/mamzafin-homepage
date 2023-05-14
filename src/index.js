import './style.css';
import {loadPage} from './pageLoad';
const content = document.getElementById('content');
const contentToAdd = loadPage();

for (let i = 0; i < contentToAdd.length; i++) {
  content.appendChild(contentToAdd[i]);
}

