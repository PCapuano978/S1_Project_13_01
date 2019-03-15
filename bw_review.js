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

var stars = document.querySelectorAll("span#stars img");

function init() {
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      };

      document.getElementById("comment").addEventListener("keyup", updateCount);

}

function lightStars(e) {
      var starNumber = e.target.alt;
      var whatever = e;
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      };

      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      };

      document.getElementById("rating").value = starNumber + " Stars";

      e.addEventListener("mouseleave", turnOffStars);

      e.addEventListener("click", function () {
            whatever.removeEventListener("mouseleave", turnOffStars);
      });
}

function turnOffStars() {

      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png"
      };

      document.getElementById("rating").value = "";

}

function updateCount() {

      var commentText = document.getElementById("comment").value,
            charCount = countCharacters(commentText),
            wordCountBox = document.getElementById("wordCount");

      wordCountBox.value = charCount + "/ 1000 ";
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