class AccountHolder {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountBalance = 0;
    }
    // static property 
    static interestRate = 4;

    // static method
    static getRateOfInterest() {
        // console.log(this);      // [class AccountHolder] { interestRate: 4 }
        console.log(`The rate of interest is ${this.interestRate}%`);
    }
    // `static methods` are defined on the class itself, rather than on instance of the class.
    // They can be used to create utility functions related to the class.

    
    credit(amount) {
        this.accountBalance += amount; 
    }

    debit(amount) {
        this.accountBalance -= amount; 
    }

    getAccountBalance() {
        console.log(`The account balance is ${this.accountBalance}`);
    }

};

let atul = new AccountHolder('Atul', 'Ranjan');
console.log(atul.accountBalance);
atul.getAccountBalance();

atul.credit(1000);
atul.getAccountBalance();

AccountHolder.getRateOfInterest();  
// static method can be called on class directly, without needing to create an instance.

// atul.getRateOfInterest();       // TypeError: atul.getRateOfInterest is not a function
// `static method` ko sirf class ke upar hi call kar payenge (not object)