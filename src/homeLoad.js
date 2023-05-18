/* eslint-disable max-len */
import Logo from './img/logo.jpeg';

const loadGreetingDiv = () => {
  // create div to wrap the content and the img
  const greetingDiv = document.createElement('div');
  greetingDiv.classList = [
    'block pr-3 pl-3 pt-3 gap-10 md:grid grid-cols-2 md:pr-20 md:pl-20 md:pt-10',
  ];
  // create div for contentwrapping and an img element
  const greetingContent = document.createElement('div');
  const greetingImg = document.createElement('img');
  greetingImg.src = Logo;
  // create content Text
  const greetingHeader = document.createElement('h2');
  greetingHeader.innerText = 'Welcome to Mamzafin Cafe!';
  greetingHeader.classList = ['text-3xl p-2'];
  const greetingText = document.createElement('p');
  // eslint-disable-next-line max-len, quotes
  greetingText.innerText =
    // eslint-disable-next-line max-len
    'Welcome to Mamzafin, the coziest café in Chiang Mai\'s Nimman district. Enjoy our handpicked coffees and freshly cooked snacks made with love. Join us in celebrating Chiang Mai\'s famous coffee culture. Mamzafin Café: where good vibes and great flavors meet.';
  greetingText.classList = ['text-sm md:text-lg'];

  // nest the Header and Text into the Content Text div
  greetingContent.appendChild(greetingHeader);
  greetingContent.appendChild(greetingText);
  // nest the content and img in the greetingDiv
  greetingDiv.appendChild(greetingContent);
  greetingDiv.appendChild(greetingImg);
  return {greetingDiv};
};

const loadHome = () => {
  const home = document.createElement('div');
  home.classList = ['h-full bg-gray-100 w-screen'];
  const greeting = loadGreetingDiv();
  for (const [key, value] of Object.entries(greeting)) {
    home.appendChild(value);
  }
  return home;
};

export {loadHome};
