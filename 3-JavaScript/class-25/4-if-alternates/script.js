// Alternates of if-else:

// iska use sirf tab karein jab humko sirf ek value kisi variable me assign karna hai ya expression ke ander use karna hai

// ------------------------------------------------------------🚩 if-else vs Ternary Operator (? :)--------------------------------------------------------
    // ✅ Both are used for conditional execution, but differ in syntax and readability.

    // 1️⃣ if-else:
    // ✅ Syntax: More readable for complex logic but takes more lines.
    // Example:
            let message;
            if (isLoggedIn) {
                message = "Welcome!";
            } else {
                message = "Please log in.";
            }

    // 2️⃣ Ternary Operator (? :):
    // ✅ Syntax: Compact and ideal for simple conditions.
    // Syntax: condition ? expressionIfTrue : expressionIfFalse;
    // Example:
            const message2 = isLoggedIn ? "Welcome!" : "Please log in.";

    // ✅ Use Case:
    // - Use if-else for complex or multi-step logic.
    // - Use the ternary operator for short, single-line conditions.



// ------------------------------------------------------- 🚩 Default Operator (||):--------------------------------------------------------------------------
    // ✅ Returns the right-hand side if the left-hand side is falsy
    // - Used for providing a fallback or default value
    // - Short-circuits: If the left-hand side is truthy, it stops and returns the left-hand side
    // Syntax: value || defaultValue
    // Example:
        // const username = inputName || "Guest";
        // If inputName is falsy (null, undefined, '', 0, false), username = "Guest"


    // Lecture Example:
    // Suppose username ki value server/database se nahi mili
    let username1;   

    // Suppose username ki value server/database se mil gayi jo ki 'Atul' hai
    // let username1 = 'Atul';   

    let fallbackValue = 'Guest';
    let greeting = `Welcome ${ username1 || fallbackValue }`;
    console.log(greeting);


// ------------------------------------------------------🚩 Nullish Coalescing Operator (??):------------------------------------------------------------------
    // ✅ Returns the right-hand side only if the left-hand side is null or undefined
    // - Used to provide a default value for variables when they are null or undefined
    // - Does NOT treat other falsy values (e.g., 0, false, '') as needing a fallback
    // Syntax: value ?? defaultValue

    // Example:
        const value1 = null ?? "Default"; // Returns "Default" because value1 is null
        const value2 = undefined ?? "Default"; // Returns "Default" because value2 is undefined
        const value3 = 0 ?? "Default"; // Returns 0 because 0 is not null or undefined
        const value4 = false ?? "Default"; // Returns false because false is not null or undefined

        // ✅ Use Case: Differentiate between null/undefined and other falsy values
        const username = userProvidedName ?? "Anonymous"; 
        // If userProvidedName is null or undefined, username = "Anonymous"; otherwise, username = userProvidedName


    // Lecture Example:
        // let username2;   
        // Suppose username ki value server/database se nahi mili

        let username2 = 'Paul';   
        // Suppose username ki value server/database se mil gayi jo ki 'Paul' hai

        let fallbackValue2 = 'Guest';
        let greeting2 = `Welcome ${ username2 && fallbackValue2 }`;
        console.log(greeting2);



//------------------------------------------------------- 🚩 Logical OR (||) vs Nullish Coalescing (??):-----------------------------------------------------
    // ✅ Both provide a fallback value but differ in how they treat falsy values.
    // - `||`: Treats ALL falsy values (null, undefined, 0, false, '', NaN) as needing a fallback.
    // - `??`: Treats ONLY null and undefined as needing a fallback.

    // Syntax:
    const result1 = value || defaultValue; // Fallback for any falsy value
    const result2 = value ?? defaultValue; // Fallback only for null or undefined

    // Examples:
        // 1️⃣ Logical OR (||):
        const username3 = "" || "Guest"; // Returns "Guest" because '' is falsy
        const age1 = 0 || 18; // Returns 18 because 0 is falsy

        // 2️⃣ Nullish Coalescing (??):
        const username4 = "" ?? "Guest"; // Returns "" because '' is not null/undefined
        const age2 = 0 ?? 18; // Returns 0 because 0 is not null/undefined

    // ✅ Use Case:
    // - Use `||` for fallback when handling any falsy value.
    // - Use `??` to differentiate between null/undefined and valid falsy values like 0, false, ''.
