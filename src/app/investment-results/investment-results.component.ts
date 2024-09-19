import { Component, computed, inject, input, Input } from '@angular/core';
import { Results } from '../results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// @Input() results?: Results[];
// results = input<Results[]>();

private investmentService = inject(InvestmentService)

//1)
// get results() {
//   return this.investmentService.resultsData;
// }

//2)
// With this pattern, you make sure that you don't accidentally change the data managed by the service from outside the service, which you could do if you were directly interacting with the resultData.
results = computed(() => this.investmentService.resultsData());

//3)
// results = this.investmentService.resultsData.asReadonly();

}
