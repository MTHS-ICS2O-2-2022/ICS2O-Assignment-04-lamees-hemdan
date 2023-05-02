// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  // this function shows the book price depending on genre and number of bookmarks selected
  // input
  var tax = 0.13
  var cost = 0
  const genre = document.getElementById("book-genre").value
  const numberOfBookmarks = parseInt(document.getElementById("number-of-bookmarks").value)

  // process
  if (genre == "Mystery") {
    cost = 15.99
  } else if (genre == "Romance") {
    cost = 18.50
  } else if (genre == "Adventure") {
    cost = 21.99
  } else if (genre == "Fictional") {
    cost = 24.50
  }

  if (numberOfBookmarks == 1) {
    cost = 1.99
  } else if (numberOfBookmarks == 2) {
    cost = 2.99
  } else if (numberOfBookmarks == 3) {
    cost = 3.99
  } else if (numberOfBookmarks == 4) {
    cost = 4.99
  }

  // output
  document.getElementById("cost").innerHTML = "The cost is: $" + cost.toFixed(2)
  document.getElementById("tax").innerHTML = "The tax is: $" + (cost * tax).toFixed(2)
  document.getElementById("total").innerHTML = "The total is: $" + (cost + (cost * tax)).toFixed(2)

}
