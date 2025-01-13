// 2. program to print fibonacci series up to a certain number

function printFibonacci(num) {
    if (num <= 0 ) {
        console.log("Please enter a positive integer greater than 0.");
        return;
    }

    let fiboSeries = '';
    if (num === 1) {
        fiboSeries = '0';
    } else if (num === 2) {
        fiboSeries = '0, 1';
    } else if (num >= 3){
        let prevPrevTerm  = 0, prevTerm  = 1;
        fiboSeries = `0, 1`;
        for (let i = 3; i <= num; i++) {
            let currentTerm = prevPrevTerm  + prevTerm   ;
            fiboSeries += `, ${currentTerm}`;

            // update terms
            prevPrevTerm = prevTerm;
            prevTerm = currentTerm;
        }
    }
    console.log(fiboSeries);
}

printFibonacci(-4);
printFibonacci(0);
printFibonacci(1);
printFibonacci(2);
printFibonacci(5);
printFibonacci(13);