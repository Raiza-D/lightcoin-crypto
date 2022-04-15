class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (const bal of this.transactions) {
      balance += bal.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) return false;
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this); // What is (this) referring to here?
    return true;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed() {
    // Notice how it has access to this.account bc of parent
    return (this.account.balance - this.amount >= 0);
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Mountain-Lover");
console.log("Starting Account Balance: ", myAccount.balance);

console.log("Attemping to withdraw even $1 should fail...");
const t1 = new Withdrawal(1.00, myAccount);
console.log("Commit result: ", t1.commit());
console.log("Account balance: ", myAccount.balance);

console.log("Depositing should succeed...");
const t2 = new Deposit(9.99, myAccount);
console.log("Commit result: ", t2.commit());
console.log("Account Balance: ", myAccount.balance);

console.log("Withdrawal for 9.99 should be allowed...");
const t3 = new Withdrawal(9.99, myAccount);
console.log("Commit result: ", t3.commit());

console.log("Ending Account Balance: ", myAccount.balance);
console.log("Looking like I'm broke again");

console.log("Account Transaction History: ", myAccount.balance);

// const myAccount = new Account("snow-patrol");

// console.log("Starting balance: ", myAccount.balance);

// t1 = new Deposit(50.25, myAccount);
// t1.commit();

// t2 = new Withdrawal(10, myAccount);
// t2.commit();

// console.log("Ending Balance:", myAccount.balance);
// console.log("First Transac: ", t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', myAccount);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log("Transaction 3:", t3);

// console.log("Balance: ", balance);


/* Another set of questions:
1. What is the difference between:
const t1 = new Deposit(50.25, myAccount);
t1 = new Deposit(50.25, myAccount);

*/

/* Questions:

*/
