import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';
import { City } from '../models/City';
import { Company } from '../models/Company';
import { User } from '../models/User';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor(private httpClient: HttpClient) { }

  basePath = "http://localhost:6824/api/Data/";

  getCountries(): Observable<Country[]> {
    let newPath = this.basePath + "getallcountry"
    return this.httpClient.get<Country[]>(newPath);
  }
  getCities(): Observable<City[]> {
    let newPath = this.basePath + "getallcity"
    return this.httpClient.get<City[]>(newPath);
  }
  getCompanies(): Observable<Company[]> {
    let newPath = this.basePath + "getallcompany"
    return this.httpClient.get<Company[]>(newPath);
  }
  getUsers(): Observable<User[]> {
    let newPath = this.basePath + "getalluser"
    return this.httpClient.get<User[]>(newPath);
  }
  getResults(): Observable<Result[]> {
    let newPath = "http://localhost:6824/api/Data/getresults"
    return this.httpClient.get<Result[]>(newPath);
  }
}





