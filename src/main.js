// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var saveCoverView = document.querySelector('.saved-view');

var currentCover;

// Add your event listeners here 👇
//google add event listener on page load
//Event listener should be 1-3 lines, only if you have an anonymous function...no logic...only FIRE/INVOKE functions
randomCoverButton.addEventListener('click', makeRandomCover);
  // coverImage.src = covers[getRandomIndex(covers)];
  // title.innerText = titles[getRandomIndex(titles)];
  // descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  // descriptor2.innerText = descriptors[getRandomIndex(descriptors)];

function makeRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

//Reflect changes from above
saveCoverButton.addEventListener('click', function() {
  randomCoverButton.style.display = "none";
  homeView.classList.add('hidden');
  saveCoverView.classList.remove('hidden');

})

makeCoverButton.addEventListener('click', changeView);

// Create your event handlers and other functions here 👇
function changeView() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
