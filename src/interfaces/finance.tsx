export interface Transaction {
  id: string;
  createdAt: string;
  transactionType: string;
  balance: string;
  balanceCurrency: string;
  transactionFromAmount: string;
  transactionFromAmountCurrency: string;
}

export interface TransactionNode {
  node: Transaction;
}

export interface Money {
  amount: number;
  currency: string;
}
export interface MoneyNode {
  node: Money;
}
export interface Bank {
  id: React.Key;
  name: string;
}
export interface BankNode {
  node: Bank;
}
export interface Account {
  id: React.Key;
  accountNumber: string;
  isActive: boolean;
  transactionAdded: boolean;
}
export interface AccountNode {
  node: Account;
}
