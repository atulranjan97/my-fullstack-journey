// Refer notes for detailed info

console.log('Hi' + 44);     // output: Hi44
// here js type coerces number to string

console.log('66' + 44);     // output: 6644
// here js type coerces number to string

console.log('66' - 44);     // output: 22
// here js type coerces string to number


console.log(true == 1);     // output: true
console.log(true == 2);     // output: false
// js type coerces boolean value to number, true converts to 1 and false converts to 0 


// type coercion unpredictable lagta hai but hai nahi if you know the rules
// try to avoid this situation(type coercion) by writing code which is easy to understand 

// strict equality(=== or !==) restrict type coercion, it first compares types and if it matches only then it compares the value

// Type conversion = you explicitly change types.   
// Type coercion = JavaScript implicitly changes types.

/*
    Dangerous coercions you actually need to know

        1. == vs ===
            0 == false    // true   → loose equality coerces false → 0
            0 === false   // false  → strict equality, no coercion

        2. Empty values in Boolean context
            ""       // falsy
            0        // falsy
            null     // falsy
            undefined // falsy
            NaN      // falsy
            []       // truthy (!) → common trap
            {}       // truthy

        3. Arrays
            [] == 0       // true   → [] → "" → 0
            [1] == true   // true   → [1] → "1" → 1
            [1,2] == true // false  → [1,2] → "1,2" → NaN

        4. null and undefined
            null == undefined   // true
            null == 0           // false
            undefined == 0      // false

                The rule from the ECMAScript specification
                    For x == y, the rules say:
                        1. If x is null and y is undefined, return true.
                        2. If x is null or undefined and y is any other type (number, string, object, etc.), return false.
                    Important: null only equals undefined under ==, nothing else.

                Why not numeric coercion?
                    Normally, == does coercion for many types.
                    But null is special: it does not coerce to 0 in comparisons.
                    So null == 0 is false, unlike false == 0 which is true.

        5. String + Number
            '5' + 2   // "52" → string concatenation
            '5' - 2   // 3    → numeric subtraction

        6. Boolean conversion in math
            true + 1   // 2    → true → 1
            false + 5  // 5    → false → 0

        7. Objects in arithmetic
            {} + 1     // "[object Object]1"  → object coerced to string
            [] + 1     // "1"                 → empty array coerced to ""

        8. NaN surprises
            NaN == NaN     // false  → NaN is never equal to anything, even itself
            isNaN('abc')   // true   → 'abc' coerced to number → NaN

    ✅ Tips
        Always use === to avoid unexpected coercion.
        Use Number(), String(), or Boolean() for explicit conversion.
        Only remember these 8 “danger zones”; everything else is predictable.
*/