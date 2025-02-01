const listingItems = document.querySelectorAll(".hide");

const callbackFunc = (entries) => {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
};

const options = {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

const observer = new IntersectionObserver(callbackFunc, options);

listingItems.forEach((listingItem) => {
  observer.observe(listingItem);
});
