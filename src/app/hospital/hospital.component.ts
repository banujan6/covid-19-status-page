import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  data: any = [];

  ngOnInit(): void {

    this.call();
    setInterval(this.call, 60000);

  }

  call(): void {
    this.apiService.trigger().subscribe(response => {
      this.data = response['data']['hospital_data'];
    })
  }

}
