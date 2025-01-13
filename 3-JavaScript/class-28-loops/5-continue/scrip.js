for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Point to remember: number of iteration abhi bhi 50 hi hai, 25 iteration me puri body execute hui hai and baki 25 iteration me rest of the body after continue statement skip ho gayi hai.
// jab bhi 'i' even hai to body continue statement ke baad skip ho jaa rahi hai 


for (let j = 0; j < 10; j++) {
    if (j === 5) {
        continue;
    }
    console.log(j);
}


let k = 0;  // initialization
while (k < 10) {    // condition
    if (k === 5) {
        continue;
    }
    console.log(k);
    k++;    // break
}
/*
What's wrong here:
    - The continue statement skips the rest of the loop body and immediately goes back to the condition check, so the j++ line is never executed when j === 5.
    - This causes an infinite loop because j will remain 5 forever.

Key Takeaways
    1) continue: Skips the current iteration and immediately checks the loop's condition. Be cautious in while loops to ensure variables still update to avoid infinite loops.

    2) break: Exits the loop entirely, regardless of the condition.
*/
