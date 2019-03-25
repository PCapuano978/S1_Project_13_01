"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Patrick M. Capuano
   Date:   3.13.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

// Load the "init" function when the window loads.
window.onload = init;

// declare "stars" variable as to be equal to all all selected queries in the "span#stars img" images, found in the document hierarchy. 
var stars = document.querySelectorAll("span#stars img");

// Establishing the "init" function where is has a for loop updating by one for every time stars' length is greater than it's initial value of 0.
function init() {
      for (var i = 0; i < stars.length; i++) {

            // For each for loop, the stars array has each of it's indexes given a style change equal to the cursor's pointer, and also has an event listner doing the lightstars function with the "mouseenter" parameter.
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      };

      // All of this is then added in area within the document that contains tags with the "comment" ID and does an eventlistener for the updateCount function with the "keyup" parameter.
      document.getElementById("comment").addEventListener("keyup", updateCount);

}

//Declares the new lightStars function with "e" parameter that a variable "starNumber" equal to e with the target through the alt method. The "whatever" variable is also set to e.
function lightStars(e) {
      var starNumber = e.target.alt;
      var whatever = e;

      //For loop is established that runs as "i" is increased each time and is less than "starNumber", where's each time the indexes of the stars array have their source set to "bw_star2.png".
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      };

      //Another for loop with i being set to starNumber and it running for i increasing and being less than five, with the stars indexes now being set to a sorce of "bw_star.png.
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      };

      //Script then is porcessed into document within the tags of the "rating" ID and sets the value to that of starNumber with the addition of the text strong " Stars" right after it.
      document.getElementById("rating").value = starNumber + " Stars";

      //An event listener is then added to the e paramet with the function of "turnOffStars" and with mouseleave as the parameter for that.
      e.addEventListener("mouseleave", turnOffStars);

      //Another event listener is added to e, this time being of the whatever function going of the "click" parameter, but with that having its own event listener removed of the following.
      e.addEventListener("click", function () {
            whatever.removeEventListener("mouseleave", turnOffStars);
      });
}

//Function "turnOffStars" is introduced with a for loop of i being increased in relation to being less than stars' length, and for each time setting the stars array source to "bw_star.png".
function turnOffStars() {

      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png"
      };

      //This script is then naturally added within the documented tags with the "rating" ID and has their value set to an empty string.
      document.getElementById("rating").value = "";

}

//The update count function is then established with the contents within.
function updateCount() {

      //The varaible commentText is set equal to the value of the tags within the document with the "comment" ID. charCount as a variable is also set to the function "countCharacters" using commentText as the parameter. Lastly, wordCountBox is set to the section in the document where the tags with the "wordCount" ID are.
      var commentText = document.getElementById("comment").value,
            charCount = countCharacters(commentText),
            wordCountBox = document.getElementById("wordCount");

      //The value of wordCountBox is then set to charCount with the string of "/ 1000" added to it.
      wordCountBox.value = charCount + "/ 1000 ";

      //If charCount is greater than one thousand, then wordCount's style color is set to white, with the background color set to red. Otherwise however, wordcount's color is set to black with a background of white.
      if (charCount > 1000) {
            wordCount.style.color = "white";
            wordCount.style.backgroundColor = "red";
      } else {
            wordCount.style.color = "black";
            wordCount.style.backgroundColor = "white";
      }
}


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}