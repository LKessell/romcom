// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');

var title = document.querySelector('.cover-title');

var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var randomCoverButton = document.querySelector('.random-cover-button');

coverImage.src = covers[getRandomIndex(covers)];

title.innerText = titles[getRandomIndex(titles)];

descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
descriptor2.innerText = descriptors[getRandomIndex(descriptors)];


// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {
  coverImage.src = covers[getRandomIndex(covers)];
  console.log(coverImage.src);
});


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
