// refer notes

function learningScope() {
    // var (declares a function-scoped variable, allow hoisting)
    console.log('x:', x);   // can access this 'x' before initialization
    var x = 10;
    console.log('x:', x);
    
    
    // let  (declares a block-scoped variable, won't allow hoisting)
    console.log('y:', y);   // cannot access this 'y' before initialization
    let y = 5;
    console.log('y:', y);
    

}

// Best practice: Declare variables in the narrowest scope possible to avoid polluting the global scope
// and minimize the risk of unintended variable overwrites. 

