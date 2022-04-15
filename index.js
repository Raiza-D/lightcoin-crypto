class Account {

  constructor(username) { // Can set balance param and set to zero: balance = 0
    this.username = username;
    // Have account balance start at $0 since that makes more sense.
    this.balance = 0;
    this.transaction = {};
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
    this.account.transaction = `${this.account}`;
  }

  commit() {
    this.account.balance += this.value;
  }

  history() {
    return this.account.history;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

console.log("Starting balance: ", myAccount.balance);

t1 = new Deposit(50.25, myAccount);
t1.commit();

t2 = new Withdrawal(10, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
console.log("First Transac: ", t1);

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
1. In the Deposit transaction, we called on the commit() method. How does the program know
that you are calling on the commit() method within the Deposit class when the Withdrawal
class has a method of the same name?
Answer: Each transaction is either a withdrawal or deposit. When you call commit(), you first specify
which transaction that commit() relates to.

2. Why is snow patrol account stored in a const variable when the instance is created?
Why can't you just do 'account = new Account("snow-patrol")' or just 'new Account("snow-patrol")'?
Answer: So you can call on that variable storing the specific account object created.

3. How do you print all of the accounts created so far?
Answer: console.log(Accounts) WILL NOT WORK.
To do so, create an object that contains all of the individual account objects.

const allAccounts = {
  myAccount,
  Raiza: anotherAccount
};

We are not storing these accounts in a database. They're stored in the PC's memory.
Therefore, use this approach of storing info in a variable or object.

Object short-hand

*/
