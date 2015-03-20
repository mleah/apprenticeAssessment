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


//Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length, and checked-in/checked-out status


var sget = require("sget");




var Book = function(title, author, genre, pageLength, status){
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageLength = pageLength;
	this.status = status;

}


//a.) add books to the inventory
// b.) remove books from the inventory 
// c.) view a list of all the books in the library
// d.) view a list of all the books in a given genre
// e.) search for a book by title or author


var Library = function(){
	this.inventory = [];

	this.addBook = function(){  
		this.inventory.push(new Book());
	};


	};


	this.removeBook = function(){


	};

	//need to add a mehtod to books specifically, and call it in this method
	this.viewAllBooks = function(){

	};

	this.viewGenreBooks = function(){

	};

	this.searchByTitle = function(){

	};

	this.searchByAuthor = function(){

	};

	//was going to try an object but would rather do something familiar so I know that this function will work.  maybe refactor later if time...
	this.userMenu = function(){
		var userChoice = getUserInput("\n\nPlease make your choice below by choosing the number of what you would like to accomplish.\n1.  View inventory\n2.  Add a book\n3.  Remove a book\n4.  Search for book by author\n5.  Search for book by genre\n6.  Quit\n\n");

		switch(userChoice){
			case "1":

				break;

			case "2":

				break;

			case "3":

				break;

			case "4":

				break;

			case "5":

				break;

			case "6":

				break;

			case "":

				break;

			default:

				break;

		}
	}
}


function getUserInput(message) {
	return sget(message).trim();
}


var myLibrary = new Library();


//add some inventory







