
const loadGreeting = () => {
  const greetingHeader = document.createElement('h2');
    greetingHeader.innerText = 'Welcome to Mamzafin Cafe!';
    greetingHeader.classList = ['text-3xl p-2']
  const greetingText = document.createElement('p');
  // eslint-disable-next-line max-len
  greetingText.innerText = 'Chiang Mai is full of cafes. Especially in the old city you can find cozy places in each street. But in the fast evolving district Nimman, more and more modern restaurants and cafes are opening. The stressful western life is starting to take foot in Nimman. Thankfully, there is the Mamzafin Cafe. A small cozy place where you can chill, drink a delicious coffee, eat handmade snacks and rest between some plants. Its the perfect place to relax and escape the noisy district.';
  return {greetingHeader, greetingText};
};

const loadHome = () => {
  const home = document.createElement('div');
  home.classList = ['h-full bg-gray-100 w-screen'];
  const greeting = loadGreeting();
  for (const [key, value] of Object.entries(greeting)) {
    home.appendChild(value);
  }
  return home;
};

export {loadHome};
