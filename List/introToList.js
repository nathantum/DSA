var fs = require('fs');
function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length =length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

// Adding element
function append(element){
    // After the element is appended, listSize is incremented by 1
    this.dataStore[this.listSize++] = element;
}

// function to find an element in a list.
// helper function.
function find(element){
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

// Removing element
function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;

    }
    return false;
}

// Determine the number of elements.
function length(){
    return this.listSize;
}

// Retrieve list elements.
function toString(){
    return this.dataStore.join(",");
} 

// Insert an element 
function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// Remove all elements.
function clear(){
    delete this.dataStore;
    // re-create an empty array
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

// Determine if a given value is in the list
function contains(element){
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

// move to the front of the list
function front(){
    this.pos = 0;
}
//  move to the end of the list
function end(){
    this.pos = this.listSize - 1;
}
// return the previous element
function prev(){
    if(this.pos > 0){
        --this.pos;
    }
}
// find the next element
function next(){
    if(this.pos < this.listSize - 1){
        ++this.pos;
    }
}
// find the current element in the list
function currPos(){
    return this.pos;
}
// move the element to a new position
function moveTo(position){
    this.pos = position;
}
// get an element
function getElement(){
    return this.dataStore[this.pos];
}


// usage examples
var names = new List();
names.append("Nate");
names.append("Tum");
names.append("Kipru");
names.append("Eliud");
names.append("John");
names.append("Edwin");
names.append("Joseph");
names.append("Barbara");

//console.log(names.toString());
//move to the first element and display it
//names.front();
//move one element and display the element's value
// names.next()
// names.next()
// names.prev()
// console.log(names.getElement());

// Read the data from the text file.
var movies = fs.readFile(films.txt).split("\n");

// Create a function to read data from a file and store it in an array
function createArr(file){
    var arr = read(file).split("\n");
    for(var i; i < arr.length; ++i){
        arr[i] = arr[i].trim();
    }
    return arr;
}
// write function to display the movies available
function displayList(list){
    for(list.front(); list.currPos() < list.length; list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        }
        else{
            console.log(list.getElement());
        }
    }
}

// create a customer who check out movies
var customers = new List();

// costructor function for the Customer object
function Customer(name, movie){
    this.name = name;
    this.movie = movie;
}

// function for checking out movies
function checkOut(name, movie){
    if(movieList.contains(movie)){
        // create customer object if the movie is available.
        // with movie's title and customer's name.
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }
    else{
        console.log(movie + " is not available.");
    }
}

// test the functions by creating objects
var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for(var i = 0; i < movies.length; ++i){
    movieList.append(movies[i]);
}

console.log("Available movies: \n");
displayList(movieList);


