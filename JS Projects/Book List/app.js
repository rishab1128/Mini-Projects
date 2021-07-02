//Book Constructor
function Book(title, author , isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}



//UI Constructor
function UI(){

}

//Add Book to list
UI.prototype.addBooktoList=function(book){
    const list=document.getElementById('book-list');

    //Create a tr element
    const row=document.createElement('tr');

    //Insert cols
    row.innerHTML=` 
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> <a href="#" class="delete" > X </a> </td>
    `

    //row.className=`${book.isbn}`;
    console.log(row);

    //Append row to book-list
    list.appendChild(row);
    
}

//Delete book-row from the list
UI.prototype.deleteBook=function(target){
    if(target.className==='delete')
    {
        target.parentElement.parentElement.remove();
    }
}

//Clear input fields (after we click submit)
UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

//Show Alert
UI.prototype.showAlert=function(msg, className){
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

    
    if(title==='' || author==='' || isbn==='')
    {
        //Show Error Alert  
        ui.showAlert('Please fill all the input fields','error')
    }
    else
    {
        //Add book to list
        ui.addBooktoList(book);

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

    //Show alert
    ui.showAlert('Book deleted!!','success');

    e.preventDefault();
})