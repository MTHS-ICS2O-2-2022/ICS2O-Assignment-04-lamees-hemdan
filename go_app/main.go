// Created By: Lamees Hemdan
// Created On: May 2023
//
// This file contains the main function for the go_app application.


package main

import (
  "fmt"
  "math"
)

func main() {
 // This function shows the book price depending on genre and number of bookmarks selected
  var genre string
	var bookmarks int
	var price float64
	var total float64
	var tax float64

	fmt.Println("Welcome to the Book Price Calculator")
	fmt.Println("Please enter the genre of the book you want to buy: ")
	fmt.Scanln(&genre)
	fmt.Println("Please enter the number of bookmarks you want from 1 to 4: ")
	fmt.Scanln(&bookmarks)

	if genre == "Mystery" {
		price = 15.99
	}
	if genre == "Romance" {
		price = 18.50
	}
	if genre == "Adventure" {
		price = 21.99
	}
	if genre == "Fiction" {
		price = 24.50
	}

	if bookmarks = "1" {
		price = 1.99
	}
	if bookmarks = "2" {
		price = 2.99
	}
	if bookmarks = "3" {
		price = 3.99
	}
	if bookmarks = "4" {
		price = 4.99
	}

	total = price + tax
	tax = total * 0.13

}
