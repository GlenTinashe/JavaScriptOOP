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

//new operator creates a new object then sets this to the object and then returns the object from the function
const anotherCircle = new Circle(1);