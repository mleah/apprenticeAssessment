/*

You should initialize your project as a git project, and make small, descriptive commits as you work. When you are finished, please send me the Github link to your completed project.

The Library

You've been contracted to write a piece of software for the local library. The software needs to meet the following requirements:

- The software should track the library's inventory of books
- Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length, and checked-in/checked-out status
- Librarians should be able to:
a.) add books to the inventory
b.) remove books from the inventory 
c.) view a list of all the books in the library
d.) view a list of all the books in a given genre
e.) search for a book by title or author

BONUS: This is a library, so books can be checked in and checked out. Librarians should also be able to:

1.) Change the checked-in/checked-out status of a copy of a book
2.) Track the name of the person who has checked out a given book and the date when it is due
3.) Mark a book as overdue
4.) View a list of checked-in books only

*/

var sget = require("sget");

var Book = function(title, author, genre, pageLength, status){
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageLength = pageLength;
	this.status = status;

	this.viewMe = function(){
		console.log("Book title: " + title + "  Book author: " + author + "  Book genre: " + genre + "  Book page length: " + pageLength +  "  Book status: " + status);
	};
}


// b.) remove books from the inventory 



var Library = function(libName){
	this.libName = libName;

	this.inventory = [];

	this.addBook = function(title, author, genre, pageLength, status){  
		this.inventory.push(new Book(title, author, genre, pageLength, status));
	};


	this.removeBook = function(entryQuery){

		var queryIndex = this.searchThroughBooks(this.inventory, entryQuery, "title");

		if (queryIndex !== -1) {
			this.inventory.splice(queryIndex,1);
		} else{
			return this.removeBook();
		}
	};


//hmm I am now seeing some refactoring potential here.... if I get to it
	this.searchThroughBooks = function(myArray, searchTerm, property) {
  		for(var i = 0, len = this.inventory.length; i < len; i++) {
      		if (this.inventory[i][property].toLowerCase() === searchTerm.toLowerCase()){
      	 	return i;
  		}
  		return -1;
	}



	this.viewAllBooks = function(){
		for (var i = 0; i < this.inventory.length; i++) {
		console.log("Title: " + this.inventory[i].title + "  Author: " + this.inventory[i].author + "  Genre: " +  this.inventory[i].genre + "  Page Length: " + this.inventory[i].pageLength + "  Status: " + this.inventory[i].status);
		}
	};

//these three (genres, titles, authors) are similar and can probably be one method somehow, not sure how to refactor right now but I need to figure this out sometime
	this.viewGenreBooks = function(genre){
		var counter = this.inventory.length;

		for (var i = 0; i < this.inventory.length; i++) {
			if(genre.toLowerCase() === this.inventory[i].genre.toLowerCase()){
				this.inventory[i].viewMe();
			} else {
				counter --;
			}
		}
		if(counter === 0){
			console.log("\nLooks like there are no books in that genre at this time!\nPlease check back soon, as we are always rotating our inventory.\nPlease check out some of our other titles in the meantime.\n");
		}
		
	};

	this.searchByTitle = function(title){
		var counter = this.inventory.length;

		for (var i = 0; i < this.inventory.length; i++) {
			if(title.toLowerCase() === this.inventory[i].title.toLowerCase()){
				this.inventory[i].viewMe();
			} else {
				counter --;
			}
		}
			if(counter === 0){
				console.log("\nWell, it looks like there are no books by that title at this time!\nPlease check back soon, as we are always rotating our inventory.\nPlease check out some of our other titles in the meantime.\n");
			}
	};

	this.searchByAuthor = function(author){
		var counter = this.inventory.length;

		for (var i = 0; i < this.inventory.length; i++) {
			if(author.toLowerCase() === this.inventory[i].author.toLowerCase()){
				this.inventory[i].viewMe();
			} else {
				counter --;
			}
		}
			if(counter === 0){
				console.log("\nWell, it looks like there are no books by that author at this time!\nPlease check back soon, as we are always rotating our inventory.\nPlease check out some of our other authors in the meantime.\n");
			}

	};


	//was going to try an object but would rather do something familiar so I know that this function will work.  maybe refactor later if time...
	this.userMenu = function(){
		var userChoice = getUserInput("\n\nPlease make your choice below by choosing the number of what you would like to accomplish.\n1.  View inventory\n2.  Add a book\n3.  Remove a book\n4.  Views books by genre\n5.  Search for book by author\n6.  Search for book by title\n7.  Quit\n\n");

		switch(userChoice){
			case "1":
				console.log("\nViewing inventory now...\n_________________________________________________________________________________________________________________________");
				this.viewAllBooks();
				this.userMenu();
				break;


			case "2":
				this.addBook(getUserInput("\nAdding a new book\nPlease enter the title: \n"), getUserInput("\nPlease enter the author: \n"), getUserInput("\nPlease enter the genre: \n"), getUserInput("\nPlease enter the page length: \n"), getUserInput("\nPlease enter the checked in status: \n"));
				this.userMenu();
				break;


			case "3":
				this.removeBook(getUserInput("\nLooks like it's time to retire a book.\nPlease enter the title of the one would you like to remove from the inventory: \n"));
				this.userMenu();
				break;


			case "4":
				this.viewGenreBooks(getUserInput("\nAll right, let's view the books in a specific genre.\nPlease choose a genre.\n"));
				this.userMenu();
				break;


			case "5":
				this.searchByAuthor(getUserInput("\nAll right, let's search for books by a specific author.\nPlease enter the author now: \n"));
				this.userMenu();
				break;

			case "6":
				this.searchByTitle(getUserInput("\nAll right, let's search for a book by the title.\nPlease enter the title now: \n"));
				this.userMenu();
				break;

			case "7":
				quit();
				break;

			case "":
				console.log("\nWhoops-looks like nothing was entered.  Please make sure to enter a valid number choice!");
				this.userMenu();
				break;

			default:
				console.log("\nPlease make sure to enter a valid number choice!\n");
				this.userMenu();
				break;

		};
	}
}


function getUserInput(message){
	return sget(message).trim();
}

function quit(){
	console.log("\nThanks for using the Inventory Management System!");
	process.exit[0];
}


var detroitLibrary = new Library("Detroit Public Library");

///add in some current inventory

var book1 = (new Book("Stranger in a Strange Land", "Robert Heinlein", "Science Fiction", "438", "Checked out"));
var book2 = (new Book("The Moon is a Harsh Mistress", "Robert Heinlein", "Science Fiction", "382", "Checked out"));
var book3 = (new Book("Jonathan Strage & Mr. Norrell", "Susanna Clarke", "Historical Fantasy", "782", "Available"));
detroitLibrary.inventory.push(book1);
detroitLibrary.inventory.push(book2);
detroitLibrary.inventory.push(book3);

console.log("\n\n___________________________________________\n   Welcome to the library!\n");

detroitLibrary.userMenu();

