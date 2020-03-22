import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  data:any = {
    "local_new_cases": 0,
    "local_total_cases": 0,
    "local_total_number_of_individuals_in_hospitals": 0,
    "local_deaths": 0,
    "local_recovered": 0,
    "global_new_cases": 0,
    "global_total_cases": 0,
    "global_deaths": 0,
    "global_recovered": 0,
  };

  ngOnInit(): void {

    this.call();
    setInterval(this.call, 60000);

  }

  call(): void {
    this.apiService.trigger().subscribe(response => {
      this.data = response['data'];
    })
  }

}
