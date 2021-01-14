//factory function
function createCircle(radius ){
    return  {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(2);

// Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//new operator creates  a new object then sets this to the object and then returns the object from the function
const anotherCircle = new Circle(1);

 //JS allows adding of properties on the fly
 anotherCircle.location = {x:1}
 // this statement aboove is exactly the same as the one below
 circle['location']={x:1}

 //nbracket notation is particularly useful for when dynamically accessing a property name or the property name has special characters like centre-location

 const propertyName = 'location';
 circle[propertyName]= {x:1}

 // delete operator to dynamically delete a property
delete circle.location;
delete circle[location];

 console.log('another circle', anotherCircle);

//value vs reference types

let x = 10;
let y = x;

x= 20;
//x = 20
console.log(x);
//y = 10 because the values are independent of each other
console.log(y);

let a = {value: 10};
let b =a;

a.value = 20;
// a = 20
console.log(a);
// b = 20 because an object is not stored in the variable. the address of the morty location of the object is stored in the variable 
console.log(b);

// primitives are copied by value and objects are copied by their reference e.g

let number = 10;
function increase(number){
    //number = 11 only within this function
    number++;
}
increase(number);
// number = 10 since its copied by value
console.log(number);

let number2 = {value: 20};
function increase(number2){
    number2.value++;
}
increase(number2);
// number = 21 since object is copied by value
console.log(number2);