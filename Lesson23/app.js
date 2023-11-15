// Events to check that page is loaded (should be applied to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener('load',function(){
  // Select all images
  // Select previous and next buttons
  // Select indicators
  const allImages = document.querySelectorAll("img");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const allIndicators = document.querySelectorAll(".indicator");
  // Create application state to keep track of the current index
  let index = 0;

  // Show images function
  function showImage() {
    const activeClass = 'active';
    // Remove active class from all images
    // For every element in images array call a function that removes "active" class
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].classList.remove(activeClass);
    }
    // Remove active class from all indicators
    // Use loop to loop through all element of array
    for(let i = 0; i < allIndicators.length; i++) {
      allIndicators[i].classList.remove(activeClass);
    }

    // Add active class to the current image and indicator
    allImages[index].classList.add(activeClass);
    allIndicators[index].classList.add(activeClass);
    // images[]
  }

  // handle next click
  function showNextImage() {
    // increase currentIndex. What happens if the current index is > than number of images that we have?
  //  0 < index < 3
    if (0 <= index && index < allImages.length - 1 ){
      index++;
    } else {
      index = 0;
    }
    console.log(index);
    showImage();
  }

  // handle previous click
  function showPrevImage() {
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    // if else condition
    if (0 < index && index < allImages.length ){
      index--;
      console.log(index);
    } else {
      index = allImages.length - 1;
      console.log(index);
    }
    showImage();
  }

  // IIFE - if you need to run a function only once immediately
  (function sayHello(name) {
    console.log('Hello ' + name);
  })();

  // Add event listeneters for button clicks
  prevButton.addEventListener("click", showPrevImage);
  // If you need to pass a parameter to your function, use arrow function or anonymus function
  // prevButton.addEventListener("click", () => sayHello('John'));
  // prevButton.addEventListener("click", function () {
  //   sayHello('Jane');
  // });
  nextButton.addEventListener("click", showNextImage);

  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 (3 x 1000 milisecond) value for 3 second delay
  setInterval(showNextImage, 3000);
});