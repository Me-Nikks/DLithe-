// powerful, flexible & fast programming lan
// console
// dataTypes
/*
Number
String
Boolean
undefined
null
BigInt 
object */

// toPrint
// console.log("Let's begin");

// arithemetic Operators

/*
+
-
*
%
/

*/

// incremental and decremental opperator
// s = 50
// console.log(s);
// s++;
// console.log(s);
// s--;
// console.log(s);

// Variable: Container for storing the values.
// rules

/* var , let , const */

// var 50;

// var a = 50;
// console.log(a);

// let b =30;
// console.log(b);
// b=58;
// console.log(b);
// let b = 60

// const myCity = Tumakuru;
// console.log(c);

// Some methods of string

// 1. length

// const str = 'Hello, World!';
// console.log(str.length); 

// // 2. charAt()

// console.log(str.charAt(2)); 

// // 3. substring (startIndex, endIndex)
// console.log(str.substring(7, 12)); 

// // 4.toUpperCase
// console.log(str.toUpperCase()); 

// // 5. toLowerCase
// console.log(str.toLowerCase()); 

// // 6. replace, replace(searchValue, replaceValue)
// console.log(str.replace('World', 'Universe')); 


// String Concatenation:

// const yrName = 'Rakesh';
// const greeting = 'Hello, ' + yrName + '! How are you?';
// console.log(greeting); 

// String Interpolation:

// const myName = 'Rakesh';
// const myAge = 23;
// const final = `Hii, my name is ${myName}, I'm ${myAge} years old`;
// console.log(final);









// DRY: don't repeat yourself
// class BankAccount{
//     customerName;
//     accountNumber;
//     balance;

//     constructor(customerName,balance=0){
//         this.customerName= customerName;
//         this.accountNumber = this.generateAccountNumber();
//         this.balance = balance;
//     }

//     generateAccountNumber(){
//         return Math.floor(Math.random()*10000)
        
//     }

//     deposit(amount) {
//         this.balance +=amount;
//     }
    
//     witdraw(amount){
//         this.balance -=amount;
//     }

// }



// const dasAccount = new BankAccount('Nikhil',2000);
// console.log(dasAccount)

// class savingsAccount extends BankAccount{
//     transactionLimit = 20000;
//     constructor(customerName,balance=0){
//         super(customerName,balance);

//     }

//     takePersonalLoan(amount){
//         console.log('taking personal loan of' +amount);
//     }


// }

// class currentAccount extends BankAccount{
//     transactionLimit = 50000;
//     constructor(customerName,balance=0){
//         super(customerName,balance);

//     }

//     takeBusinessLoan(amount){
//         console.log('taking personal loan of' +amount);
//     }


// }


// const ziyaAccount = new savingsAccount('Ziya',20000);
// console.log(ziyaAccount);
// const RiyaAccount = new savingsAccount('Riya',20000);
// console.log(RiyaAccount);
// const jjAcount = new savingsAccount('jhon',5000);
// console.log(jjAcount)

