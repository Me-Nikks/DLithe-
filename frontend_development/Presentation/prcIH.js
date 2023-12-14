// DRY: Don't repeat yourself

class BankAccount{
    customerName;
    accountNum;
    balance =0;

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNum = this.generateAcNum();
        this.balance =balance;
    }

    generateAcNum(){
        return Math.floor(Math.random()*10000)

    }

    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }


}

class currentAccount extends BankAccount{
    transactionLimit = 50000;
    constructor(customerName,balance){
        super(customerName,balance)
        
    }


}

class savingsAccount extends BankAccount{
    transactionLimit = 20000;
    constructor(customerName,balance){
        super(customerName,balance)
        
    }
}

const bibinAc = new savingsAccount('Bibin',50000);
console.log(bibinAc);
const shriAC = new currentAccount('Sridhar',500000)
console.log(shriAC);
const robinAc = new savingsAccount('Robibin',50000);
console.log(robinAc);

