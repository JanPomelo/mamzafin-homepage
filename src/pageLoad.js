

const loadHeader = () => {
  const header = document.createElement('header');
  header.innerText = 'Hello';
  header.classList = ['bg-green-400'];
  return header;
};

export {loadHeader};
