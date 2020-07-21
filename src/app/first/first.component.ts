import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
// ok
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  URLTitle = 'siple URL';
  isDisabled = true;

  id: number;
  name: any;
  address: any;
  street: any;

  selectedName: string;

  users = [];
  api;

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getUsersList();
    this.apiGet();
  }

  getUsersList() {
    this.workService.getUsers().subscribe((data) => {this.users = data
      // this.street = data['address'] ['city'];
      // this.address = data.address.zipcode;
    });
  }


  apiGet() {
    this.workService.getApi().subscribe(
      (data ) => { this.api = data.results,
        error => console.error('There was an error!', error)
        console.log(this.api)
      })
  }
};
