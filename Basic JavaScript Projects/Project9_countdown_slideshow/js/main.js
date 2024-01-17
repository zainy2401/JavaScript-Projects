function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Times up!");
        }
    }
    tick();
}

let slideIndex = 1; //Global variable which represents the current slide.
showSlides(slideIndex); //Calls the showSlides() function to initially display the first image, as by default they are all displaying none in css.

//This function is called from the two arrows on the slideshow, in which it passes a negative one or postive one depending on if the slideshow is going backwards or forwards
function plusSlides(n) {
  showSlides(slideIndex += n); //Passes a positive or negative 1 to calculate with the current index to decide which image is going to display.
}

//This function is called from the dots and passes a number between 1-3 to display one of the three images.
function currentSlide(n) {
  showSlides(slideIndex = n); //Passes the exact number instead of having to calculate.
}

//This function determines which image is to be displayed based off the current slide and the previous parameter 'n' passed through HTML.
function showSlides(n) {
  let i; //Initialises variable use for a 'for loop'
  let slides = document.getElementsByClassName("mySlides"); //Collects all the divs that use the referred class name.
  let dots = document.getElementsByClassName("dot"); //Collects all the elements that use that class name.
  if (n > slides.length) {slideIndex = 1} //This comparison is used when the slideIndex is at 3 from the start, so when the user presses the "next" button, it will be '4' which reaches the condition and therefore sets the index back to 1, as there are only 3 images.
  if (n < 1) {slideIndex = slides.length} //This comparison does the same as above except in reverse, when the index is at 1, and the user selects "previous" button, it will be -1, which reaches the condition and thus sets the index to the length of total slides which is 3.
  //The 'for loop' below will go through every collection of 'mySlides' that exist and set the display to 'none'
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //Similarily to the loop above, this will go through the 'dots' elements replace the 'active' value in the class attribute - if they have it - to a blank.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";   //This will assign the current slide a styling display of 'block', and it takes one away from the current index variable, as the true index begins at 0.
  dots[slideIndex-1].className += " active"; //Similarily this does the same as above, except instead of directly styling, it adds a value to the class attribute, to style a specific dot to look active.
}