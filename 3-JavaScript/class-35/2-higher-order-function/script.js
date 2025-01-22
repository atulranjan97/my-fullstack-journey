// Higher order function: function that takes another function as a parameter or returns a function.

// Functions that return a function
const createDouble = () => {
    function double(num) {
        return num * 2;
    }
    return double;
}
/*  Shorthand of createDouble:

        const createDouble = () => {
            return num => num * 2;
        }
            
*/
// Aise function jo function/object create karke dete hai are called `factories`.
// `createDouble` is a factory becauses it's creating a function (double)

// here `createDouble` is a parent/outer function while `double` is child/inner function
// there is no way to call inner function outside the body of outer function 

const twice = createDouble();
console.log(twice(5));
// is same as
console.log(createDouble()(4));