// Creating a CUI Library Software using OOPs Concept:
class Library {
    constructor() {
        this.books = [];
    }
    addBooks(books) {
        this.books.push(...books);
    }
    listAllBooks() {
        this.books.forEach(function(book,index) {
            console.log(`${index+1}) ${book.name} by ${book.author}`);
        });
    }
}

class Book {
    constructor(name,isbn,price,author) {
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }
    info() {
        console.log(`${this.readStatus ? "✔":"❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ?"read it":"not read it"} and is available at ${this.price}`);
    }
    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }
}

let katniLibrary = new Library();
let book1 = new Book("A Monk who sold his ferrari", 7382916493, 200, "Robin Sharma");
let book2 = new Book("think and grow rich", 2536183738, 250, "Napoliean Hills");
katniLibrary.addBooks([book1,book2]);