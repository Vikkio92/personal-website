// Profile pic turns colorful as you scroll
// var offset = 100; // Define the offset value, which determines the range for the transition
// var maxFilterStrength = 100; // Define the maximum strength of the grayscale filter

// window.addEventListener("scroll", function() { // Attach a scroll event listener to the window object
//     var magicElements = document.querySelectorAll(".magic"); // Select the element with the class "magic" and assign it to the variable "elem"
  
//     magicElements.forEach(function(elem) { // iterate over all the elements and apply the scroll event listener to each one individually
//       var topDist = elem.getBoundingClientRect().top - window.pageYOffset; // Calculate the distance between the top of "elem" and the top of the viewport. Starts big and decreases as you scroll down
//       var filterStrength = Math.abs(topDist)/500 * maxFilterStrength
  
//       if (topDist <= 500 && topDist >= -500) {
//         elem.style.filter = "grayscale(" + filterStrength + "%)"; // Apply the grayscale filter with the calculated filter strength to "elem"
//       } else {
//         elem.style.filter = "grayscale(100%)";
//       }
//     });
//   });


// Make profile-pic scroll up faster than the other content
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
  
    // Calculate the desired offset for the profile photo
    var offsetProfile = -scrollPosition * 1.2;
    var offsetLondon = -scrollPosition * 0.5;
  
    // Apply the offset to the profile and London photo
    document.getElementById('profile-pic').style.transform = 'translateY(' + offsetProfile + 'px)';
    document.getElementById('london-pic').style.transform = 'translateY(' + offsetLondon + 'px)';
  });


// Make Japanese translation appear when you hover over the Japanese text
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class "japanese-text"
    var hoverableElements = document.querySelectorAll(".japanese-text");
    // Select all elements with the class "japanese-translation"
    var additionalTextElements = document.querySelectorAll(".japanese-translation");
  
    // Iterate over each "japanese-text" element
    hoverableElements.forEach(function(hoverableElement) {
      // Assign a mouseover event listener to each "japanese-text" element
      hoverableElement.addEventListener("mouseover", function() {
        // Get the index of the current "japanese-text" element
        var index = Array.from(hoverableElements).indexOf(hoverableElement);
        // Display the corresponding "japanese-translation" element by toggling on the .show class that has opacity of 1
        additionalTextElements[index].classList.toggle("show");
      });
  
      // Assign a mouseout event listener to each "japanese-text" element
      hoverableElement.addEventListener("mouseout", function() {
        // Get the index of the current "japanese-text" element
        var index = Array.from(hoverableElements).indexOf(hoverableElement);
        // Hide the corresponding "japanese-translation" element by toggling off the .show class that has opacity of 1
        additionalTextElements[index].classList.toggle("show");
      });
    });
  });


// NOT WORKING
// Rotate emoji
document.addEventListener("DOMContentLoaded", function() {
  // Select all <span> elements with the class "emoji"
  var hoverableElements = document.querySelectorAll("span.emoji");

  // Iterate over each "emoji" element
  hoverableElements.forEach(function(hoverableElement) {
    // Assign a mouseover event listener to each "emoji" element
    hoverableElement.addEventListener("mouseover", function() {
      // Rotate the element
      hoverableElement.style.transform = 'rotate(360deg)';
    });

    // Assign a mouseout event listener to each "emoji" element
    hoverableElement.addEventListener("mouseout", function() {
      // Reset the rotation
      hoverableElement.style.transform = 'rotate(0deg)';
    });
  });
});
