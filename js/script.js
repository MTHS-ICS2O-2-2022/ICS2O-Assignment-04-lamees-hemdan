// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  // this function shows the book price depending on genre and number of bookmarks selected
  // input
  const TAX = 0.13
  let cost = 0
  let subTotal = 0
  let taxPaid = 0
  let total = 0
  let price = 0
  const genre = document.getElementById("book-genre").value
  const numberOfBookmarks = parseInt(document.getElementById("number-of-bookmarks").value)

  // process
  if (genre == "Mystery") {
    cost = 15.99
  } else if (genre == "Romance") {
    cost = 19.50
  } else if (genre == "Adventure") {
    cost = 21.99
  } else if (genre == "Fiction") {
    cost = 24.50
  }

  if (numberOfBookmarks == 1) {
    price = 1.99
  } else if (numberOfBookmarks == 2) {
    price = 2.99
  } else if (numberOfBookmarks == 3) {
    price = 3.99
  } else if (numberOfBookmarks == 4) {
    price = 4.99
  }

  subTotal = price + cost
  taxPaid = subTotal * TAX
  total = subTotal + taxPaid

  // output
  document.getElementById("cost").innerHTML = "The subtotal is: $" + subTotal.toFixed(2) + 
  "<br />The tax is: $" + taxPaid.toFixed(2) + "<br />The total is: $" + total.toFixed(2)

}
