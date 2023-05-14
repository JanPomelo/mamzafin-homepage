

const loadHeader = () => {
  const header = document.createElement('header');
  header.classList = ['bg-green-400 h-10 w-screen'];
  return header;
};

const loadMain = () => {
  const main = document.createElement('main');
  main.classList = ['w-screen flex-grow'];
  return main;
};

const loadFooter = () => {
  const footer = document.createElement('footer');
  footer.classList = ['bg-green-400 h-10 w-screen'];
  return footer;
};


const loadPage = () => {
  return [loadHeader(), loadMain(), loadFooter()];
};

export {loadPage};
