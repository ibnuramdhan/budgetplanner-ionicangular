import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  enteredReason = '';
  inputAmount: number;
  amountList = [];
  expensesList = [];
  totalAmount = 0;

  constructor() { }

  onClick() {
    alert('Button clicked');
  }

  resetForm() {
    this.enteredReason = '';
    this.inputAmount = '';
  }

  addExpense() {
    this.expensesList.push(this.enteredReason + ' : RM' + this.inputAmount);
    this.amountList.push(this.inputAmount);
    this.totalAmount += this.inputAmount;
    this.resetForm();
  }


  removeItem(index) {
    this.expensesList.splice(index, 1);
    this.totalAmount -= this.amountList[index];
    this.amountList.splice(index, 1);
  }

}