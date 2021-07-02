class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{

    addBooktoList(book){
        const list=document.getElementById('book-list');

        //Create a tr element
        const row=document.createElement('tr');

        //Insert cols
        row.innerHTML=` 
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td id="${book.isbn}">${book.isbn}</td>
            <td> <a href="#" class="delete" > X </a> </td>
        `

        //row.className=`${book.isbn}`;
        //console.log(row);

        //Append row to book-list
        list.appendChild(row);
    }

    deleteBook(target){
        if(target.className==='delete')
        {
            target.parentElement.parentElement.remove();
        }

    }

    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }

    showAlert(msg,className){
        //Create a div
        const div=document.createElement('div');
        div.className=`alert ${className}`; 
        const text=document.createTextNode(msg);
        div.appendChild(text);

        //Add the div to the DOM -->specifically before the form
        const container=document.querySelector('.container');
        const form=document.getElementById('book-form');
        container.insertBefore(div,form);

        //Disappear the error message after 3s
        setTimeout(function(){
            document.querySelector(`.alert`).remove();
        } , 3000);
    }

}

//Local Storage Class
class Store{
    static getBooks(){
        let books;
        //local Storage stores values in the form of key-value pairs 
        //Here we are looking for the key books if it is present or not in the local Storage
        if(localStorage.getItem('books')===null){
            books=[];
        }
        else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books=Store.getBooks();
        books.forEach(function(book){
            const ui=new UI();
            //Add book to ui
            ui.addBooktoList(book);
        })
    }

    static addBook(book){
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    //Method 1 , of removing book from local storage
    static removeBook(book_row){
        //console.log(book_row.children[2].id);
        const delete_book_id=book_row.children[2].id;
        const books=Store.getBooks();
        books.forEach(function(book){
            if(book.isbn==delete_book_id)
            {
                console.log(book.isbn , books.indexOf(book));
                const idx=books.indexOf(book);
                books.splice(idx,1);
                return;
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }

    //Method 2 , of removing book from local storage
    static removeBook2(isbn){

        const books=Store.getBooks();
        books.forEach(function(book,index){
            if(book.isbn==isbn)
            {
                books.splice(index,1);
                return;
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}


//DOM Load Event
document.addEventListener('DOMContentLoaded',Store.displayBooks)


//Event Listener for submit (for adding a book)
document.getElementById('book-form').addEventListener('submit', runSubmit);

function runSubmit(e){
    console.log('test');

    //Get form values
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;

    //Instantiate Book
    const book=new Book(title,author,isbn);

    //Instantiate UI
    const ui=new UI();
    console.log(ui);

    
    if(title==='' || author==='' || isbn==='')
    {
        //Show Error Alert  
        ui.showAlert('Please fill all the input fields','error')
    }
    else
    {
        //Add book to list
        ui.addBooktoList(book);

        //Add book to local storage
        Store.addBook(book);

        //Clear input fields
        ui.clearFields();

        //Show Success message -> Book is succesfully added to the list
        ui.showAlert('Successfully added the book','success');
    }

    e.preventDefault();
}

//Event Listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

    //Delete book
    const ui=new UI();
    ui.deleteBook(e.target);

    //Delete book from local storage using Method 1 removeBook
    /*Store.removeBook(e.target.parentElement.parentElement);*/

    //Delete book from local storage using Method 2 removeBook2
    Store.removeBook2(e.target.parentElement.previousElementSibling.textContent);

    //Show alert
    ui.showAlert('Book deleted!!','success');

    e.preventDefault();
})