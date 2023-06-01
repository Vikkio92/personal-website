// Profile pic turns colorful as you scroll
var offset = 100; // Define the offset value, which determines the range for the transition
var maxFilterStrength = 100; // Define the maximum strength of the grayscale filter

window.addEventListener("scroll", function() { // Attach a scroll event listener to the window object
    var elem = document.querySelector(".magic"); // Select the element with the class "magic" and assign it to the variable "elem"
    var topDist = elem.getBoundingClientRect().top - window.pageYOffset; // Calculate the distance between the top of "elem" and the top of the viewport. Starts big and decreases as you scroll down
    //var bottomDist = elem.getBoundingClientRect().bottom - window.pageYOffset; // Calculate the distance between the bottom of "elem" and the top of the viewport. Starts big and decreases as you scroll down

    //var scrollPosition = Math.max(0, Math.min(offset - topDist, bottomDist - offset)); // Calculate the scroll position within the offset range
    //var filterStrength = (maxFilterStrength / offset) * scrollPosition; // Calculate the strength of the grayscale filter based on the scroll position

    var filterStrength = Math.abs(topDist)/500 * maxFilterStrength

    if (topDist <= 500 && topDist >= -500) {
        elem.style.filter = "grayscale(" + filterStrength + "%)"; // Apply the grayscale filter with the calculated filter strength to "elem"
    } else {
        elem.style.filter = "grayscale(100%)"
    }
    console.log(topDist)
});

// Make profile-pic scroll up faster than the other content
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
  
    // Calculate the desired offset for the profile photo
    var offset = -scrollPosition * 0.8;
  
    // Apply the offset to the profile photo
    document.getElementById('profile-photo').style.transform = 'translateY(' + offset + 'px)';
  });