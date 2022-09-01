import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/City';
import { Company } from 'src/app/models/Company';

import { Country } from 'src/app/models/Country';
import { Result } from 'src/app/models/result';
import { User } from 'src/app/models/User';
import { DataservicesService } from 'src/app/services/dataservices.service';
import { SharedDataService } from 'src/app/services/shareddata.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  dataLoaded: boolean = false;

  user: User;
  users: User[] = [];
  selectedUsers: any[] = [];

  country: Country;
  countries: Country[] = [];
  selectedCountries: any[] = [];

  company: Company;
  companies: Company[] = [];
  selectedCompanies: any[] = [];

  cities: City[] = [];

  results: Result[] = [];
  filteredResults: Result[] = [];

  constructor(private dataServices: DataservicesService, private sharedDataService: SharedDataService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCountries();
    this.getCompanies();
    this.getResults();
  }


  getCountries() {
    this.dataServices.getCountries().subscribe((response) => {
      this.countries = response
      this.dataLoadedControl();

    });
  }
  getCompanies() {
    this.dataServices.getCompanies().subscribe((response) => {
      this.companies = response
      this.dataLoadedControl();


    });
  }
  getCities() {
    this.dataServices.getCities().subscribe((response) => {
      this.cities = response
      this.dataLoadedControl();


    });
  }
  getUsers() {
    this.dataServices.getUsers().subscribe((response) => {
      this.users = response
      
      this.dataLoadedControl();

    });
  }
  dataLoadedControl() {
    if (this.companies.length > 0 && this.users.length > 0 && this.countries.length > 0) {
      this.dataLoaded = true;
    }
  }
  getResults() {
    this.dataServices.getResults().subscribe((response) => {
      this.results = response;
    });

  }
  getList() {
    let companyIDs = this.results.map(({ companyID }) => companyID);
    let countryIDs = this.results.map(({ countryID }) => countryID);
    let userIDs = this.users.map(({ userId }) => userId)

    if (this.selectedCompanies.length > 0) {
      companyIDs = this.selectedCompanies

    }
    if (this.selectedCountries.length > 0) {
      countryIDs = this.selectedCountries
    }
    if (this.selectedUsers.length > 0) {
      userIDs = this.selectedUsers
    }

    this.filteredResults = this.results.filter(x => companyIDs.includes(x.companyID) &&
      countryIDs.includes(x.countryID) &&
      this.results.map(result => {
        result.users = result.users.filter(user => (userIDs.includes(user.userId)))
      }));

    this.sharedDataService.setFilteredData(this.filteredResults)
    this.resultPage();

  }
  resultPage() {
    this.router.navigate(['/resultscreen'])
  }
}
