import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { Results } from '../app/results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  // public resultsData?: Results[];
  // using signals
  //  resultsData = signal<Results[] | undefined>(undefined);

}
