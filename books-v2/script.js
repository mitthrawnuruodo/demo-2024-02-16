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
        for (let item of data.myBooks) {
            const book = new Book(
                item.title, 
                item.authorFirstName,
                item.authorLastName,
                item.published
            );
            myBooks.push(book);
        }
        Book.printList(myBooks);
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener("load", () => {
    getBooks();    
});

// Filter search
inputField.addEventListener("keyup", () => {
    const filterQuery = inputField.value.toLowerCase().trim();
    console.log(filterQuery);
    const filtered = myBooks.filter((book)=>{
        console.log(book.title, book.author(), book.published);
        const title = book.title.toLowerCase();
        const author = book.author().toLowerCase();
        const year = book.published.toString();

        if (title.indexOf(filterQuery) > -1) return true;
        if (author.indexOf(filterQuery) > -1) return true;
        if (year.indexOf(filterQuery) > -1) return true;
        return false;
    });
    Book.printList(filtered);
});