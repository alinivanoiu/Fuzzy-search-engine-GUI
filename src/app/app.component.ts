import { Component } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  searchInput = '';
  fuzzyResults;
  displayedColumnsGoogle: string[] = ['title', 'summary', 'url', 'fuzzyRelevance'];
  displayedColumnsDDGo: string[] = ['text', 'url', 'fuzzyRelevance'];
  dataSourceGoogle = [];
  dataSourceDDGo = [];
  constructor(private service: SearchService) {
  }
  search() {
    this.service.search(this.searchInput).subscribe((data) => {this.fuzzyResults = data;
                                                               this.dataSourceDDGo = this.fuzzyResults.duckResults;
                                                               this.dataSourceGoogle = this.fuzzyResults.googleResults;
                                                               console.log(this.dataSourceGoogle); });
  }
}
