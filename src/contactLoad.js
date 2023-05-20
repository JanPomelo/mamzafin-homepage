/* eslint-disable max-len */


const loadContact = () => {
  const contact = document.createElement('div');
  contact.classList = [
    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-10',
  ];
  contact.id = 'actualContent';
  // home.appendChild(loadwrapperDiv());
  // home.appendChild(loadApproach());
  // home.appendChild(loadIngredients());
  return contact;
};

export {loadContact};