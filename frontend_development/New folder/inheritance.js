class BankAccont {
    customerName;
    accountNumber;
    balance=0;

    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withDraw(amount){
        this.balance -= amount;
    }
}

class currentAccount extends BankAccont{
    transactionLimit=50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }

}

class savingsAccount extends BankAccont{
    transactionLimit=20000;
    constructor(customerName,balance=0){
        super(customerName,balance)
    }
}

const dasAccount = new currentAccount('Nikhildas',2000)
const ziyaAccount = new savingsAccount('Ziya',20000)
console.log(dasAccount,ziyaAccount)