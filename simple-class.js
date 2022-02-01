let book = {
    id: 1,
    name: 'Learning Programming',
    price: 250,
    author: ""
};

function findAuthor(id){
    let author = "";
    switch(id){
        case 1:
            author = "Rafat Hossain";
            break;
        case 2:
            author = "Programming Hero";
            break;
        default:
            author = "Not Found";
    }
    return author;
}

const bookId = book.id;
let getResult = findAuthor(bookId);
book.author = getResult;
var getAuthor = book.author;
console.log(getAuthor);