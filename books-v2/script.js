class Book {
    constructor (title, authorFirstName, authorLastName, yearPublished) {
        this.title = title;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName; 
        this.published = yearPublished;
    }

    toString() {
        const {
            authorFirstName: afn, 
            authorLastName: aln, 
            title, 
            published: pub
        } = this;
        return `${afn} <strong>${aln}</strong>: ${title} (${pub})`;
    }

    author() {
        return this.authorFirstName + " " + this.authorLastName;
    }

    static printList (booklist) {
        const listElement = document.getElementById('myList');
        let str = "";
        for (const book of booklist) {
            str += `<li>${book.toString()}</li>`;
        }
        listElement.innerHTML = str;
    }
}

// let b = new Book("Sourceres Stone", "J.K.", "Rowling", 1997);

// console.log(b.toString());
// console.log(b.author());
// console.log(b.title);

// const a = [b];
// Book.printList(a);

// Global Variables
let myBooks = [];
const inputField = document.getElementById("q");

const getBooks = async () => {
    try {
        const response = await fetch("books.json");
        if (!response.ok) throw response.statusText;
        const data = await response.json();
        console.log(data.myBooks);
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener("load", () => {
    getBooks();    
});