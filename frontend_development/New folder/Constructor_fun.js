function BankAccont(customerName,balance=0){
    this.customerName = customerName;
    this.actNum= Date.now(); // to generate random num
    this.balance=balance;

    this.deposit = function(amount) {
        this.balance += amount;
    }

    this.withDraw = (amount) => {
        this.balance -= amount;

    }

}

// const dasAccount= new BankAccont('Nikhildas',2000);
// const shriAccount= new BankAccont('shridar',3000);
// const bibinAccount= new BankAccont('Bibin',4000);
// const srujanAccount= new BankAccont('Srujan',4000);

// console.log(dasAccount);
// console.log(bibinAccount.balance);

// bibinAccount.withDraw(2000);

// srujanAccount.deposit(20000);

// console.log(bibinAccount.balance);
// console.log(srujanAccount.balance);

// accountForm.addEventListener('submit', (e) => {
//     e.preventDefult();
//     console.log(customerName.value, balance.value)

// })