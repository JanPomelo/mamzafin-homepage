import Logo from './img/logo.jpeg';


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

const loadMain = () => {
  const main = document.createElement('main');
  main.classList = ['w-screen flex-grow'];
  return main;
};

const loadFooter = () => {
  const footer = document.createElement('footer');
  footer.classList = ['bg-green-600 h-12 w-screen'];
  return footer;
};


const loadPage = () => {
  return [loadHeader(), loadMain(), loadFooter()];
};

export {loadPage};
