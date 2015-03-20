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
	this.pagelength = pagelength;
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


	};


	this.removeBook = function(){


	};

	this.viewAllBooks = function(){

	};

	this.viewGenreBooks = function(){

	};

	this.searchByTitle = function(){

	};

	this.searchByAuthor = function(){

	};

}



var myLibrary = new Library();


//add some inventory





