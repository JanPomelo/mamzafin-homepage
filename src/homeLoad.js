/* eslint-disable max-len */
import Logo from './img/logo.jpeg';

const loadwrapperDiv = () => {
  // create div to wrap the content and the img
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList = [
    'flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-10',
  ];
  // create div for contentwrapping and an img element
  const content = document.createElement('div');
  const greetingImg = document.createElement('img');
  greetingImg.src = Logo;
  // create content Text
  const header = document.createElement('h2');
  header.innerText = 'Welcome to Mamzafin Cafe!';
  header.classList = ['text-3xl pt-2 pb-2'];
  const text = document.createElement('p');
  // eslint-disable-next-line max-len, quotes
  text.innerText =
    // eslint-disable-next-line max-len
    'Welcome to Mamzafin, the coziest café in Chiang Mai\'s Nimman district. Enjoy our handpicked coffees and freshly cooked snacks made with love. Join us in celebrating Chiang Mai\'s famous coffee culture. Mamzafin Café: where good vibes and great flavors meet.';
  text.classList = ['text-sm md:text-xl'];

  // nest the Header and Text into the Content Text div
  content.appendChild(header);
  content.appendChild(text);
  // nest the content and img in the wrapperDiv
  wrapperDiv.appendChild(content);
  wrapperDiv.appendChild(greetingImg);
  return wrapperDiv;
};

const loadApproach = () => {
  // create div to wrap content and img
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList = ['flex flex-col-reverse gap-3 md:grid grid-cols-2 md:gap-10'];
  // create img
  const approachImage = document.createElement('img');
  approachImage.src = Logo;
  // create div to wrap content
  const content = document.createElement('div');
  // create paragraph for the text
  const text = document.createElement('section');
  text.innerText =
    'At Mamzafin, we believe in creating a laid-back and cozy atmosphere that feels like home. Our approach is all about embracing the natural world around us. Step into our café and you\'ll find yourself surrounded by lush greenery, bringing the beauty of nature indoors. We strive to make every visit an experience that\'s relaxed, comfortable, and inviting. So come on over, kick back, and enjoy the perfect blend of casual charm and natural serenity at Mamzafin Café.';
  text.classList = ['text-sm md:text-xl'];
  // add text to content
  content.appendChild(text);
  // add content and img to wrapperDiv
  wrapperDiv.appendChild(approachImage);
  wrapperDiv.appendChild(content);
  return wrapperDiv;
};


const loadHome = () => {
  const home = document.createElement('div');
  home.classList = [
    'h-full bg-gray-100 w-screen pr-3 pl-3 pt-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-10',
  ];
  home.appendChild(loadwrapperDiv());
  home.appendChild(loadApproach());
  return home;
};

export {loadHome};
