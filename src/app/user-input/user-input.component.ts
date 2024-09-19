import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // using signals
  // calculate  = output<InvestmentInput>();


  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
   
    let data: InvestmentInput = {
      initialInvestment : +this.enteredInitialInvestment(),
      annualInvestment : +this.enteredAnnualInvestment(),
      expectedReturn : +this.enteredExpectedReturn(),
      duration : +this.enteredDuration()
    };
   
    this.investmentService.calculateInvestmentResults(data);
    // this.calculate.emit(data);

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

  }
}
