class Book
{   
    title;
    author;

    constructor(title, author)
    {
        this.title = title;
        this.author = author;
    }
}

class Bookshelf
{
    name;
    books = [];

    constructor(name)
    {
        this.name = name;
    }
    addBook (title, author)
    {
        let newBook = new Book(title, author);
        books.push(newBook); 
    }

    removeBook (title)
    {
        for (let i = 0; i < books.length; i++)
        {
            if(books[i].title = title)
            {
                delete books[i];
                console.log("Book removed");
                return;
            }
        }
        console.log("Book not found");
    }

    displayBooks ()
    {
        console.log(books);
    }
}

class Library 
{
    bookshelves = [];

    addBookShelf (name)
    {
        let bookshelf = new Bookshelf(name);
        bookshelves.push(bookshelf);
    }

    removeBookshelf (name)
    {
        for (let i = 0; i < bookshelves.length; i++)
        {
            if(bookshelves[i].name = name)
            {
                delete books[i];
                console.log("Book removed");
                return;
            }
        }
        console.log("Book not found");
    }

    addBookToBookshelf (name, title, author)
    {
        for(let i = 0; i < bookshelves.length; i++)
        {
            if(bookshelves[i].name == name)
            {
                bookshelves[i].bookshelf.books.push(new Book(title, author));
                console.log("Book added to" + name);
                return;
            }
        }
        console.log("Couldn't find " + name + ",failed to add book.");
    }
    
    removeBookFromBookshelf (name, title)
    {
        for(let i = 0; i < bookshelves.length; i++)
        {
            if(bookshelves[i].name == name)
            {
                for(let j=0; j < bookshelves[i].bookshelf.books.length; j++)
                {
                    if(bookshelves[i].bookshelf.books.book.title)
                    {
                        delete bookshelves[i].bookshelf.books.book;
                        console.log("Book was removed.")
                        return;
                    }
                }
            }
        }
        console.log("Couldn't find book, failed to remove.");
    }

    displayLibrary ()
    {
        for (let i = 0; i<bookshelves.length; i++)
        {
            console.log(bookshelves[i]);
        }
    }

}